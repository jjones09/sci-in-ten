import React from 'react';
import Player from 'react-audio-player';
import { Button } from 'antd';

import 'antd/dist/antd.css';
import './RssPlayer.css';

import stateManipulator from '../../stateManipulator';

const RssPlayer = props => {

    const episodeIndex = stateManipulator.getStateManipulator(0);

    let rssJson;
    if (props.rss) {
      const secureRss = props.rss.split('http:').join('https:');
      rssJson = JSON.parse(secureRss);
    }

    return (
        <div className="RssPlayer">
          {rssJson.items.map((item, index) => <div><Button
            style={{width: '100%', textAlign: 'left'}}
            key={`playerLink-${index}`}
            type={index === episodeIndex.value ? 'primary' : 'default'}
            onClick={() => episodeIndex.setState(index)}>{`Episode ${rssJson.items.length - index} - ${item.title}`}</Button></div>)}
          {<Player src={rssJson.items[episodeIndex.value].url} controls style={{width: '100%'}}/>}
        </div>
      )
};

export default RssPlayer;