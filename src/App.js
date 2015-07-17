import React, { Component } from 'react';
import Gauge from 'react-digital-gauge';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value:33.2};
    setInterval(()=>(this.setState({value:Math.random()*100})), 500);
  }

  render() {
    return (
      <div>
        <Gauge value={this.state.value} units={'m/s'} label={'Velocity'} />
      </div>
    );
  }
}
