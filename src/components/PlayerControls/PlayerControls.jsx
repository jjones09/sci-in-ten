import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const PlayerControls = ({download, playing, changeStatus, time}) => {

    return <Fragment>
        <span onClick={changeStatus}>
            <FontAwesomeIcon icon={playing ? faPause : faPlay} />
        </span>
        <span>
            {`${time.current}/${time.duration}`}
        </span>
    </Fragment>
};

export default PlayerControls;