import React from 'react';
import axios from 'axios';

import './PlayerItem.css';

const PlayerItem = props => {

    const downloadEpisode = async () => {

        const {data: epUri} = await axios(props.source);
    
        var element = document.createElement('a');
        element.setAttribute('href', epUri);
        element.setAttribute('download');

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    };

    return <div
            className={`PlayerEpisode${props.selected ? ' selected' : ''}`}
            key={`playerLink-${props.index}`}
            type={props.type}
            onClick={props.onClick}>
            {props.children}
        </div>;
}
 
export default PlayerItem;