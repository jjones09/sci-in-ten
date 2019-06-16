import React from 'react';
import { ClipLoader } from 'react-spinners';

import './Episodes.css';

import RssPlayer from '../../components/RssPlayer/RssPlayer';

const Episodes = ({rss, match}) => {

  const selectedEp = match.params.epNo;

    return (
        <div className='Episodes'>
          <div className='ContentContainer'>
            { rss ? <RssPlayer rss={rss} selectedEpisode={selectedEp}/> : <ClipLoader /> }
          </div>
        </div>
      )
};

export default Episodes;