import React, { useEffect } from 'react';
import axios from 'axios';
import ScrollLock from 'react-scrolllock';

import './App.css';
import stateManipulator from './stateManipulator';

import HeaderNav from './components/HeaderNav';
import Home from './components/Home';
import RssPlayer from './components/RssPlayer';

const SERVER_RSS = 'https://sci-in-ten-server.herokuapp.com/rss';

const App = props => {

  const rss = stateManipulator.getStateManipulator('');

  const fetchRSS = async () => {
    const res = await axios(SERVER_RSS);
    rss.setState(JSON.stringify(res.data));
  }

  useEffect(() => {
    fetchRSS();
  }, []);

  return (
    <div className="App">
      <HeaderNav />
      <Home />
      {/* {rss.value ? <RssPlayer rss={rss.value} /> : ''} */}
      <ScrollLock/>
    </div>
  );
};

export default App;