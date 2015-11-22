import './css/normalize.css';
import './css/local.css';

import React, { Component } from 'react';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import DigitalGauge from 'react-digital-gauge';
import AnalogGauge from 'react-analog-gauge';
import LiquidGauge from 'react-liquid-gauge';
import Shell from './Shell';
import StateStore from './StateStore';

export default class App extends Component {
  constructor(props) {
    super(props);

    let {theme, value} = StateStore.getState();

    this.state = {
      value: value,
      muiTheme: ThemeManager.getMuiTheme(theme)
    };

    console.log(this.state.muiTheme);

    setInterval(()=>(this.setState({value:Math.random()*100})), 1500);
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    };
  }

  render() {
    const style = {
      marginBottom: 10
    };

    return (
      <Shell>
        <div style={{margin:'0 auto', width:220}}>
          <div style={style}>
            <DigitalGauge value={this.state.value} units={''} label={'Digital'} />
          </div>
          <div style={style}>
            <AnalogGauge value={this.state.value} label={'Analog'} />
          </div>
          <div style={style}>
            <LiquidGauge value={this.state.value} label={'Liquid'} />
          </div>
        </div>
      </Shell>
    );
  }
}
