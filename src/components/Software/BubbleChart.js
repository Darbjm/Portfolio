import * as d3 from 'd3';
import photoshop from './logos/photoshop-cc.svg';
import premiere from './logos/premierpro-cc.svg';
import illustrator from './logos/illustrator-cc.svg';
import indesign from './logos/indesign-cc.svg';
import lightroom from './logos/lightroom-cc.svg';
import xd from './logos/XD-cc.svg';
import web from './logos/webpack-icon.svg';
import vs from './logos/visual-studio-code-1.svg';
import slack from './logos/slack-1.svg';
import sass from './logos/sass-1.svg';
import boot from './logos/bootstrap-4.svg';
import react from './logos/react.svg';
import post from './logos/postgresql.svg';
// import php from './logos/php-1.svg'
// import Go from './logos/gopher.svg'
// import C4D from './logos/C4D_Logo.svg'
import nod from './logos/nodejs-icon.svg';
import mong from './logos/mongodb.svg';
import mocha from './logos/mocha-1.svg';
import chai from './logos/chai.svg';
import json from './logos/json.svg';
import js from './logos/javascript.svg';
import html from './logos/html-5.svg';
import github from './logos/github-1.svg';
import express from './logos/express-109.svg';
import django from './logos/django.svg';
import css from './logos/css3.svg';
import bulma from './logos/bulma.svg';
import babel from './logos/babel-10.svg';
import mapbox from './logos/mapbox-1.svg';
import syn from './logos/synology.svg';
import word from './logos/wordpress-blue.svg';
import cloud from './logos/cloudinary.svg';
import Twillio from './logos/twilio.svg';
import D3 from './logos/d3-2.svg';
import yandex from './logos/yandex-2.svg';
import Insomnia from './logos/insomnia.svg';
import Robo from './logos/Robo.svg';
import table from './logos/table.svg';
// import trello from './logos/trello.svg'
import heroku from './logos/heroku-1.svg';
import rhino from './logos/rhino.svg';
// import solid from './logos/solidworks.svg'
import photo from './logos/photo.svg';
import TS from './logos/TS.svg';
import Redux from './logos/Redux.svg';
import Monday from './logos/Monday.svg';
import Firebase from './logos/firebase.svg';
import Storybook from './logos/Storybook.svg';
import Styled from './logos/Styled.svg';

class D3BubbleChart {
  constructor(element, screenWidth) {
    const iconSource = photoshop;

    const links = [
      { source: 'Photoshop', target: 'Webpack', icon: web },
      { source: 'Webpack', target: 'Visual Studio Code', icon: vs },
      { source: 'Visual Studio Code', target: 'Slack', icon: slack },
      { source: 'Slack', target: 'Sass', icon: sass },
      { source: 'Sass', target: 'Bootstrap', icon: boot },
      { source: 'Bootstrap', target: 'React', icon: react },
      { source: 'React', target: 'PostgreSQL', icon: post },
      { source: 'PostgreSQL', target: 'Node.js', icon: nod },
      // {source: 'PHP', target: 'PHP', icon: php},
      // {source: 'PHP', target: 'Go', icon: Go},
      // {source: 'PHP', target: 'C4D', icon: C4D},
      { source: 'Node.js', target: 'MongoDB', icon: mong },
      { source: 'MongoDB', target: 'Mocha', icon: mocha },
      { source: 'Mocha', target: 'Chai', icon: chai },
      { source: 'Chai', target: 'JSON', icon: json },
      { source: 'JSON', target: 'JavaScript', icon: js },
      { source: 'JavaScript', target: 'HTML5', icon: html },
      { source: 'HTML5', target: 'GitHub', icon: github },
      { source: 'GitHub', target: 'Express.js', icon: express },
      { source: 'Express.js', target: 'Django', icon: django },
      { source: 'Django', target: 'CSS3', icon: css },
      { source: 'CSS3', target: 'Mapbox', icon: mapbox },
      { source: 'Mapbox', target: 'Bulma', icon: bulma },
      { source: 'Bulma', target: 'Babel', icon: babel },
      { source: 'Babel', target: 'Premiere Pro', icon: premiere },
      { source: 'Premiere Pro', target: 'Cloudinary', icon: cloud },
      { source: 'Cloudinary', target: 'Illustrator', icon: illustrator },
      { source: 'Illustrator', target: 'Twillio', icon: Twillio },
      { source: 'Twillio', target: 'Indesign', icon: indesign },
      { source: 'Indesign', target: 'Synology', icon: syn },
      { source: 'Synology', target: 'Lightroom', icon: lightroom },
      { source: 'Lightroom', target: 'Wordpress', icon: word },
      { source: 'Wordpress', target: 'XD', icon: xd },
      { source: 'XD', target: 'D3', icon: D3 },
      { source: 'D3', target: 'Yandex', icon: yandex },
      { source: 'Yandex', target: 'Insomnia', icon: Insomnia },
      { source: 'Insomnia', target: 'Yandex', icon: yandex },
      { source: 'Yandex', target: 'Robo 3T', icon: Robo },
      { source: 'Robo 3T', target: 'TablePlus', icon: table },
      { source: 'TablePlus', target: 'TypeScript', icon: TS },
      { source: 'TypeScript', target: 'Redux', icon: Redux },
      { source: 'Redux', target: 'Monday', icon: Monday },
      { source: 'Monday', target: 'Firebase', icon: Firebase },
      { source: 'Firebase', target: 'Styled components', icon: Styled },
      { source: 'Styled components', target: 'Storybook', icon: Storybook },
      // { source: 'TablePlus', target: 'Trello', icon: trello, },
      { source: 'Storybook', target: 'Heroku', icon: heroku },
      { source: 'Heroku', target: 'Rhino 3D', icon: rhino },
      // { source: 'Rhino 3D', target: 'SolidWorks', icon: solid, },
      { source: 'Rhino 3D', target: 'Photography', icon: photo },
      { source: 'Photography', target: 'Photoshop', icon: babel },
    ];

    const nodes = {};

    // Compute the distinct nodes from the links.
    links.forEach(function(linkd) {
      linkd.source =
        nodes[linkd.source] ||
        (nodes[linkd.source] = { name: linkd.source, icon: iconSource });
      linkd.target =
        nodes[linkd.target] ||
        (nodes[linkd.target] = { name: linkd.target, icon: linkd.icon });
    });

    let width = 1000;
    let height = 900;
    let circleR = 35;
    let imageS = 55;
    let distance = 300;
    let charge = -400;

    if (screenWidth > 1800) {
      circleR = 35;
      imageS = 55;
      distance = 300;
    }

    if (screenWidth < 1799 && screenWidth > 1499) {
      width = 780;
      height = 900;
      circleR = 30;
      imageS = 50;
      distance = 120;
      charge = -400;
    }

    if (screenWidth < 1498 && screenWidth > 1300) {
      width = 650;
      height = 900;
      circleR = 30;
      imageS = 45;
      distance = 150;
      charge = -250;
    }

    if (screenWidth < 1023 && screenWidth > 767) {
      width = 766;
      height = 800;
      circleR = 30;
      imageS = 45;
      distance = 100;
      charge = -400;
    }

    if (screenWidth < 767 && screenWidth > 417) {
      width = 409;
      height = 500;
      circleR = 20;
      imageS = 30;
      distance = 55;
      charge = -100;
    }

    if (screenWidth <= 417) {
      width = 374;
      height = 400;
      circleR = 20;
      imageS = 30;
      distance = 50;
      charge = -95;
    }

    const force = d3.layout
      .force()
      .nodes(d3.values(nodes))
      .links(links)
      .size([width, height])
      .linkDistance(distance)
      .charge(charge)
      // eslint-disable-next-line no-use-before-define
      .on('tick', tick)
      .start();

    const svg = d3
      .select(element)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const link = svg
      .selectAll('.link')
      .data(force.links())
      .enter()
      .append('line')
      .attr('class', 'link');

    function mouseover() {
      d3.select(this)
        .select('circle')
        .transition()
        .duration(750)
        .attr('r', circleR * 1.2);
      d3.select(this)
        .select('text')
        .transition()
        .duration(1000)
        .attr('x', circleR * 1.5)
        .attr('dy', '.35em')
        .style('opacity', 1)
        .text(function(d) {
          return d.name;
        });
    }

    function mouseout() {
      d3.select(this)
        .select('circle')
        .transition()
        .duration(750)
        .attr('r', circleR);
      d3.select(this)
        .select('text')
        .transition()
        .duration(750)
        .attr('x', 37)
        .style('opacity', 0);
    }

    const node = svg
      .selectAll('.node')
      .data(force.nodes())
      .enter()
      .append('g')
      .attr('class', 'node')
      .on('mouseover', mouseover)
      .on('mouseout', mouseout)
      .call(force.drag);

    node.append('circle').attr('r', circleR);

    node
      .append('image')
      .attr('xlink:href', function(d) {
        return d.icon;
      })
      .attr('x', `-${imageS / 2}px`)
      .attr('y', `-${imageS / 2}px`)
      .attr('width', `${imageS}px`)
      .attr('height', `${imageS}px`);

    node.append('a').attr('xlink:href', function() {
      return 'http://somelink.com/link.php?id=';
    });

    node
      .append('text')
      .attr('x', 37)
      .attr('dy', '.35em')
      .text(function(d) {
        return d.name;
      })
      .style('opacity', 0)
      .attr('fill', '#ffae3d')
      .attr('stroke', 'none');

    function tick() {
      link
        .attr('x1', function(d) {
          return d.source.x;
        })
        .attr('y1', function(d) {
          return d.source.y;
        })
        .attr('x2', function(d) {
          return d.target.x;
        })
        .attr('y2', function(d) {
          return d.target.y;
        });

      node.attr('transform', function(d) {
        return `translate(${d.x},${d.y})`;
      });
    }
  }
}

export default D3BubbleChart;
