import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import stateManipulator from './stateManipulator';

// import HeaderNav from './components/HeaderNav/HeaderNav';
import Footer from './components/Footer/Footer';

import Home from './containers/Home/Home';
import Episodes from './containers/Episodes/Episodes';

const SERVER_RSS = 'https://sci-in-ten-server.herokuapp.com/rss';

const App = props => {

  const rss = stateManipulator.getStateManipulator('');

  const fetchRSS = async () => {
    const res = await axios(SERVER_RSS);
    rss.setState(JSON.stringify(res.data).split('http:').join('https:'));
  }

  useEffect(() => {
    fetchRSS();
  }, []);

  return (
    <div className='App'>
      {/* <HeaderNav /> */}
      <Route path='/' exact component={Home} />
      {/* <Route path='/about/' exact component={About} /> */}
      <Route path='/episodes/:epNo?' exact render={route =><Episodes match={route.match} rss={rss.value} />} />
      {/* <Route path='/contact/' exact component={Contact} /> */}
      <Footer />
    </div>
  );
};

export default App;