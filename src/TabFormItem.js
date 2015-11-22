import React, { Component } from 'react';
import TextField from 'material-ui/lib/text-field';
import Icon from './Icon';

export default class TabFormItem extends Component {
  constructor(props) {
    super(props);
    this.state = {name: props.name || ''};
    console.log(this.props);
  }

  handleChange(e) {
    this.setState({name: e.target.value});
    this.props.onChange(this.props.id, e.target.value);
  }

  remove() {
    this.props.remove(this.props.id);
  }

  render() {
    return (
      <div>
        <span>{this.props.id}. </span>
        <TextField hintText='New tab' value={this.state.name} onChange={(e)=>this.handleChange(e)} />
        <a href='#' onClick={()=>this.remove()}><Icon name='close' /></a>
      </div>
    );
  }
}
