import React, { Component } from 'react';
import './App.css';

import About from './components/About/About';
import Header from './components/Header/Header';
import SectionContent from './components/SectionContent/SectionContent';

import ScrollLock from 'react-scrolllock';
  

class App extends Component {

  targetRef = React.createRef();
  targetElement = null;

  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      rss: null
    }
  }

  async componentDidMount() {

    let rss = fetch('https://sci-in-ten-server.herokuapp.com/rss').then(res => res.text()).then(json => {
      console.log(json);
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

  getHeaderPosition() {
    return this.state.selectedIndex === 0 ? 'at-bottom' : 'at-top';
  }

  render() {
    return (
      <div className="App" ref={this.targetElement}>
        <div className="App-contents vh-for-mobile"></div>
        <div className={"Selected-content vh-for-mobile " + this.getHeaderPosition()}>
            <Header updatePageContent={this.updatePageContent.bind(this)}/>
            <SectionContent Content={this.getPageContent()} />
        </div>
        <ScrollLock/>
      </div>
    );
  }
}

export default App;
