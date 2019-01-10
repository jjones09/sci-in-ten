import React, { Component, Image } from 'react';

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
      <div className="About">
        <img src={require('../../assets/about-page-img.jpg')} />
        {this.getPodcastAbout()}
      </div>
    );
  }
}

export default About;
