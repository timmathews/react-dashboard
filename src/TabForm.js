import React, { Component } from 'react';
import TabFormItem from './TabFormItem';

export default class TabForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var TabFormItems = [];
    var key = 0;
    if(this.props && this.props.tabs) {
      TabFormItems = this.props.tabs.map(function(t) {
        return (
          <TabFormItem key={key++} name={t.name} id={t.id}
            remove={(i)=>this.props.remove(i)}
            onChange={(i,j)=>this.props.onChange(i,j)} />
        );
      }, this);
    }

    return (
      <ul>
        {TabFormItems}
      </ul>
    );
  }
}
