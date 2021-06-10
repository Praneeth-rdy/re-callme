import React, { useContext } from 'react'
import styles from '../styles/components.module.css';

import { SocketContext } from '../SocketContext';


function VideoGrid() {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    return (
        <div className={styles.mainDiv}>
            {
                stream && (
                    <div className={styles.videoGridItem} >
                        <h1>{name || 'Me'}</h1>
                        <video playsInline muted ref={myVideo} autoPlay></video>
                    </div>
                )
            }
            {
                callAccepted && !callEnded && (
                    <div className={styles.videoGridItem} >
                        <h1>{call.name || 'Name'}</h1>
                        <video playsInline ref={userVideo} autoPlay></video>
                    </div>
                )
            }
            {/* <div className="videoGrid" ></div>
            <div className="videoGrid" ></div>
            <div className="videoGrid" ></div>
            <div className="videoGrid" ></div> */}
        </div>

    )
}

export default VideoGrid;
