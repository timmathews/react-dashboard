import React, { Component } from 'react';
import Button from 'material-ui/lib/raised-button';
import AppBar from 'material-ui/lib/app-bar';
import connectToStores from 'alt/utils/connectToStores';
import Icon from './Icon';
import ConfigureDialog from './ConfigureDialog';
import Actions from './Actions';
import StateStore from './StateStore';

var appElement = document.getElementById('root');

@connectToStores
export default class Shell extends Component {
  static getStores() {
    return [StateStore];
  }

  static getPropsFromStores() {
    let s = StateStore.getState();
    return {
      full: s.isFullscreen,
      currentTab: s.currentTab,
      tabList: s.tabList
    };
  }

  static contextTypes = {
    muiTheme: React.PropTypes.object
  }

  constructor(props) {
    super(props);

    this.state = {currentTab:this.props.currentTab, modalIsOpen:false};

    document.addEventListener('keydown', (e)=>this.handleKeyDown(e), false);
  }

  handleKeyDown(e) {
    if(e.keyCode === 77 && !this.state.modalIsOpen) {
      this.toggle(e);
    }
  }

  toggle(e) {
    e.preventDefault();
    this.setState({full:!this.state.full});
    Actions.toggleFullscreen();
  }

  closeModal(e) {
    this.setState({modalIsOpen:false});
  }

  showConfigure(e) {
    e.preventDefault();
    this.setState({modalIsOpen:true});
    console.log('showConfigure', this.state);
  }

  render() {
    var className;
    if(this.state.full) {
      className = 'full';
    }

    var Tabs = this.props.tabList.map(function(t) {
      let active = t.id === this.props.currentTab ? 'active' : '';
      let icon = t.icon ? <Icon name={t.icon} /> : null;

      return <li className={active}><a href={'#' + t.id}>{icon} {t.name}</a></li>;
    }, this);

    let style = {
      background: this.context.muiTheme.paper.backgroundColor,
      color: this.context.muiTheme.appBar.textColor
    };

    let iconStyle = {
      padding: 6,
      width: this.context.muiTheme.appBar.height / 2,
      height: this.context.muiTheme.appBar.height / 2,
      fill: this.context.muiTheme.appBar.textColor
    };

    console.log(this.context.muiTheme);

    return (
      <div className={className}>
        <AppBar title='Instrument Panel'
          iconElementLeft={<Icon name='fullscreen' style={iconStyle} />}
          iconElementRight={<Icon name='settings' style={iconStyle} />}
        />
        <nav id='sidebar' className='sidebar nav' style={style}>
          <div>
            <ul>
              {Tabs}
            </ul>
          </div>
          <div style={{padding:12}}>
            <Button label='Add Tab'>
              <Icon name='add' size={20} />
            </Button>
          </div>
        </nav>
        <section className='content'>{this.props.children}</section>
        <ConfigureDialog ref='dialog' open={this.state.modalIsOpen} onClose={()=>this.closeModal()} {...this.props} />
      </div>
    );
  }
}
