import React, { Component } from 'react'
import D3BubbleChart from './BubbleChart'

export default class BubbleWrapper extends Component {
	componentDidMount() {
		this.setState({
			chart: new D3BubbleChart(this.refs.chart, this.props.width)
		})
  }

	shouldComponentUpdate() {
		return false
  }


	render() {
    return <div className="chart-area" ref="chart"></div>
	}
}



