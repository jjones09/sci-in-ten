import React, { Component, Image } from 'react';
import './SectionContent.css';

class SectionContent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {

    };
  }

  render() {
    return (
      <div className="SectionContainer">
        <div className="ContentContainer">
            {this.props.Content}
        </div>
      </div>
    );
  }
}

export default SectionContent;
