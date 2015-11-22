import './css/normalize.css';
import './css/local.css';

import React, { Component } from 'react';
import DigitalGauge from 'react-digital-gauge';
import AnalogGauge from 'react-analog-gauge';
import LiquidGauge from 'react-liquid-gauge';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value:33.2};
    setInterval(()=>(this.setState({value:Math.random()*100})), 1500);
  }

  render() {
    const style = {
      marginBottom: 10
    };

    return (
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
    );
  }
}
