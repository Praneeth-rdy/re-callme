import React, { useContext, useState } from 'react'
import styles from '../styles/components.module.css';

import { SocketContext } from '../SocketContext';


function Options() {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser, answerCall, call } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return (
        <div className={styles.optionsDiv}>
            <div>
                <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} /><button onClick={() => navigator.clipboard.writeText(me)}>Copy ID</button>
            </div>
            <div>
                <input type="text" placeholder="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
                {callAccepted && !callEnded ? (
                    <button onClick={leaveCall}>Hang Up</button>
                ) : (
                    <button onClick={() => callUser(idToCall)}>Call</button>
                )}
            </div>
            {call.isReceivedCall && !callAccepted && (
                <div>
                    {call.name} is callng:
                    <button onClick={answerCall}>Answer</button>
                </div>
            )}
        </div>

    )
}

export default Options;
