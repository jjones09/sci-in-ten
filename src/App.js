import React, { Component } from 'react';
import './App.css';

import About from './components/About/About';
import Header from './components/Header/Header';

import rssToJson from 'rss-to-json';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      rss: null
    }
  }

  async componentDidMount() {

    let rss = fetch('http://mediapub.it.ox.ac.uk/feeds/142523/audio.xml').then(res => res.text()).then(xml => {
      console.log(xml);
    });
  }

  updatePageContent(index) {
    this.setState({selectedIndex: index});
    console.log('Selected index is ' + index);
  }

  getPageContent() {
    console.log('getting page content');
    if (this.state.selectedIndex === 1) {
      return <About/>;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-contents">
          {this.state.rss}
        </div>
        <Header updatePageContent={this.updatePageContent.bind(this)}/>
        {this.getPageContent()}
      </div>
    );
  }
}

export default App;
