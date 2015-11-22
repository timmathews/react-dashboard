import React, { Component } from 'react';
import max from 'lodash.max';
import remove from 'lodash.remove';
import Dialog from 'material-ui/lib/dialog';
import TabForm from './TabForm';
import Icon from './Icon';

export default class ConfigureDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {tabs: this.props.tabList};
  }

  render() {
    let standardActions = [
      { text: 'Cancel' },
      { text: 'Submit', onTouchTap: ()=>this._handleDialogSubmit(), ref: 'submit' }
    ];

    return (
      <Dialog
        title='Configure'
        actions={standardActions}
        actionFocus='submit'
        autoDetectWindowHeight={true}
        autoScrollBodyContent={true}
        open={this.props.open}
        ref='dialog'
        onRequestClose={this.props.onClose}>
        <TabForm tabs={this.state.tabs} remove={(i)=>this._handleTabRemove(i)} onChange={(i,j)=>this._handleTabChange(i,j)} />
        <button onClick={()=>this._handleTabAdd()}><Icon name='add' /></button>
      </Dialog>
    );
  }

  _handleDialogSubmit(e) {
    console.log('_handleDialogSubmit', e);
    this.props.onClose();
  }

  _handleRequestClose() {
    console.log('_handleRequestClose');
    this.props.onClose();
  }

  _handleTabRemove(id) {
    console.log('_handleTabRemove', id);

    if(this.state.tabs.length < 2) {
      return;
    }

    let s = this.state.tabs.filter(function(t) { return t.id !== id; });

//    for(var i = 0; i < s.length; ++i) {
//      s[i].id = i + 1;
//    }

    this.setState({tabs: s});

    console.log(s);
  }

  _handleTabAdd() {
    console.log('_handleTabAdd');
    let s = this.state.tabs;
    let m = max(s, 'id').id;
    s.push({id:m+1, name:''});
    this.setState({tabs: s});

    console.log(s);
  }

  _handleTabChange(id, value) {
    console.log('_handleTabChange', id, value);
    let t = this.state.tabs;
    t[id-1].name = value;
    this.setState({tabs:t});
  }
}
