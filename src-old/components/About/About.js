import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './About.css';

import podcastAbout from './content';

class About extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    };
  }

  getPodcastAbout() {
      let podAboutHtml = podcastAbout.map((element, index) => {
          return <p key={index}>{element}</p>;
      });
      return <div>{podAboutHtml}</div>;
  }

  render() {
    return (
      <Grid fluid className="About">
        <Row>
          <Col md={4}>
            <img src={require('../../assets/about-page-img.jpg')} height='200vh' />
          </Col>
          <Col md={8}>
            <div className="AboutText">
              Science is all about discovering the undiscovered, and knowing the unknown. 
              It's an exciting field with plenty of research going on out there, so it can be pretty hard to keep up to date with everything!
            </div>
          </Col>
          
        </Row>
      </Grid>
    );
  }
}

export default About;
