import React, { useState, useContext } from 'react';
import { FaUser, FaVideo, FaMicrophone, FaPhone, FaEllipsisV } from 'react-icons/fa';

import Styles from '../styles/layout.module.css';

import { SocketContext } from '../SocketContext';


function Layout({ children }) {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser, answerCall, call } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return (
        <div className={Styles.bgContainer}>
            <header>
                <h1>Call Me</h1>
                <div className={Styles.headerIconContainer}>
                    <FaUser />
                </div>
            </header>
            { children}
            <div className={Styles.footerContainer}>
                <div>
                    <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <button onClick={() => navigator.clipboard.writeText(me)}>Copy ID</button>
                </div>
                {call.isReceivedCall && !callAccepted && (
                    <div>
                        {call.name} is callng:
                        <button onClick={answerCall}>Answer</button>
                    </div>
                )}
                <input type="text" placeholder="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
                
                <footer>
                    <div><FaVideo /></div>
                    <div><FaMicrophone /></div>
                    {callAccepted && !callEnded ? (
                        <div className={Styles.bgRed} onClick={leaveCall}><FaPhone /></div>
                    ) : (
                        <div className={Styles.bgGreen} onClick={() => callUser(idToCall)}><FaPhone /></div>
                    )}
                    <div><FaEllipsisV /></div>
                </footer>
            </div>

        </div>
    )
}

export default Layout;
