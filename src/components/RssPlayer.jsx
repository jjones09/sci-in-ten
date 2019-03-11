import React from 'react';
import Player from 'react-audio-player';
import stateManipulator from '../stateManipulator';

const RssPlayer = props => {

    const episodeIndex = stateManipulator.getStateManipulator(0);

    const rssJson = props.rss ? JSON.parse(props.rss) : {};

    return (
        <div className="RssPlayer">
          {rssJson.items.map((item, index) => <a key={`playerLink-${index}`} href='#' onClick={() => episodeIndex.setState(index)}>{item.title}</a>)}
          {<Player src={rssJson.items[episodeIndex.value].url} controls />}
        </div>
      )
};

export default RssPlayer;