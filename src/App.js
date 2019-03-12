import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';

import './App.css';
import stateManipulator from './stateManipulator';

import HeaderNav from './components/HeaderNav/HeaderNav';
import Home from './components/Home';
import RssPlayer from './components/RssPlayer/RssPlayer';

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
      <Route path='/' exact component={Home} />
      {/* <Route path='/about/' exact component={About} /> */}
      <Route path='/episodes/' exact component={props => rss.value ? <RssPlayer rss={rss.value} /> : <ClipLoader />} />
      {/* <Route path='/contact/' exact component={Contact} /> */}
      {/* {rss.value ? <RssPlayer rss={rss.value} /> : ''} */}
    </div>
  );
};

export default App;