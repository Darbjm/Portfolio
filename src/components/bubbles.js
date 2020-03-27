import React from 'react'
import * as d3 from 'd3'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'

class Bubbles extends React.Component {
  componentDidMount() {
    this.drawBarChart()
  }

  drawBarChart()  {
    const canvasHeight = 400
    const canvasWidth = 600
    const svg = d3.select(this.refs.canvas)
        .append('svg')
        .attr('width', canvasWidth)
        .attr('height', canvasHeight)
        // .style('border', '1px solid black')
    svg.append('circle')
        .attr('cx', 50)
        .attr('cy', 50)
        .attr('r', 50)
        .style('stroke', '#ffad3b')
        .style("stroke-width", 3)
        .style('fill', 'none')
    svg.append('text')
        .attr("x",0)
        .attr("y",70)
        .attr("font-family", 'FontAwesome')
        .attr('font-size', function(d) { return '70px';} )
        .html(<FontAwesomeIcon icon={faHtml5} />); 
        // .text('f13b')

        // .append(<FontAwesomeIcon icon={faHtml5} />)
        // .style('xlink:href', '')
  }

  render() { 
    return (
      <>
      {/* <FontAwesomeIcon icon={faHtml5} /> */}
      <div ref="canvas"></div> 
      </>
    )
  }
}


export default Bubbles


