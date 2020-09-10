/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-string-refs */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import D3BubbleChart from './BubbleChart';

export default class BubbleWrapper extends Component {
  componentDidMount() {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      chart: new D3BubbleChart(this.refs.chart, this.props.width),
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    // eslint-disable-next-line react/no-string-refs
    return <div className="chart-area" ref="chart"></div>;
  }
}

BubbleWrapper.propTypes = {
  width: propTypes.number,
};
