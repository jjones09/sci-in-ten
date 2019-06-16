import React, { useRef } from 'react';
import Player from 'react-audio-player';

import PlayerItem from '../PlayerItem/PlayerItem';

import './RssPlayer.css';

import stateManipulator from '../../stateManipulator';

const isValidEpisodeNumber = (num, total) => num && num > 0 && num <= total;

const RssPlayer = props => {
    const player = useRef(null);

    const episodeIndex = stateManipulator.getStateManipulator(startingIndex);
    const playing = stateManipulator.getStateManipulator(false);

    const secureRss = props.rss.split('http:').join('https:');
    const rssJson = JSON.parse(secureRss);

    const episodeCount = rssJson.items.length;

    let startingIndex = 0;

    if (isValidEpisodeNumber(props.selectedEpisode, episodeCount)) {
      startingIndex = episodeCount - props.selectedEpisode;
    }

    const setCurrentEpisode = (e, i) => {
      episodeIndex.setState(i);
    }

    return (
        <div className="RssPlayer">
          {rssJson.items.map((item, index) => <PlayerItem
            key={`playerLink-${index}`}
            selected={episodeIndex.value === index}
            source={item.url}
            onClick={e => setCurrentEpisode(e, index)}>
            {`Episode ${episodeCount - index} - ${item.title}`}</PlayerItem>)}
          <Player src={rssJson.items[episodeIndex.value].url} controls={true} ref={player} />
          {/* <PlayerControls /> */}
        </div>
      )
};

export default RssPlayer;