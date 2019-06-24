import React, { useEffect, useRef } from 'react';
import Player from 'react-audio-player';
import axios from 'axios';

import PlayerControls from '../PlayerControls/PlayerControls';
import PlayerItem from '../PlayerItem/PlayerItem';

import './RssPlayer.css';

import stateManipulator from '../../stateManipulator';

const isValidEpisodeNumber = (num, total) => num && num > 0 && num <= total;

const RssPlayer = props => {
    const player = useRef();

    const startingIndex = isValidEpisodeNumber(props.selectedEpisode, episodeCount) ?
      episodeCount - props.selectedEpisode : 0;

    const episodeIndex = stateManipulator.getStateManipulator(startingIndex);
    const playing = stateManipulator.getStateManipulator(false);
    const time = stateManipulator.getStateManipulator({current: 0, duration: 0});

    useEffect(() => {
      const updateTime = e => time.setState({
        current: e.target.currentTime,
        duration: e.target.duration
      });
      window.addEventListener('timeupdate', updateTime);
      return () => {
        window.removeEventListener('timeupdate', updateTime);
      };
    });

    const secureRss = props.rss.split('http:').join('https:');
    const rssJson = JSON.parse(secureRss);

    const episodeCount = rssJson.items.length;

    const togglePlaying = () => {
      playing.setState(!playing.value);
      const audio = player.current.audioEl;
      console.log(`Playing - ${playing.value}`)
      playing.value ? audio.pause() : audio.play();
    }

    const changeEpisode = (index) => {
      episodeIndex.setState(index);
      if (playing.value) {
        togglePlaying();
      }
    }

    return (
      <div className="RssPlayer">
        {rssJson.items.map((item, index) => <PlayerItem
          key={`playerLink-${index}`}
          selected={episodeIndex.value === index}
          source={item.url}
          onClick={() => changeEpisode(index)}>
          {`Episode ${episodeCount - index} - ${item.title}`}</PlayerItem>)}
        <Player src={rssJson.items[episodeIndex.value].url} ref={player} />
        <PlayerControls
          playing={playing.value}
          changeStatus={togglePlaying}
          time={time.value} />
      </div>
    )
};

export default RssPlayer;