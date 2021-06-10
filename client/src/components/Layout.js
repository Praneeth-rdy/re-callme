import React, { useState, useContext } from 'react';
import { FaUser, FaVideo, FaMicrophone, FaPhone, FaEllipsisV, FaClone } from 'react-icons/fa';

import Styles from '../styles/layout.module.css';

import { SocketContext } from '../SocketContext';


function Layout({ children }) {
    const { me, myVideo, callAccepted, name, setName, callEnded, leaveCall, callUser, userVideo, answerCall, call } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return (
        <div className={Styles.bgContainer}>
            <header>
                <h1>Call Me</h1>
                {call.isReceivedCall && !callAccepted && (
                    <div>
                        {call.name} is callng:
                        <button onClick={answerCall}>Answer</button>
                    </div>
                )}
                <div className={Styles.headerIconContainer}>
                    <FaUser />
                </div>
            </header>
            { children}
            <div className={Styles.footerContainer}>
                <div className={Styles.inputDiv}>
                    <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <span className={Styles.footerIcon} onClick={() => navigator.clipboard.writeText(me)}><FaClone size={12} /></span>
                </div>

                {!(callAccepted && !callEnded) ? (
                    <div className={Styles.inputDiv}>
                        <input type="text" placeholder="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
                        <span className={Styles.bgGreen + ' ' + Styles.footerIcon} onClick={() => callUser(idToCall)}><FaPhone size={12} /></span>
                    </div>
                ) : ('')}


                <footer>
                    <div className={Styles.footerIcon} onClick={() => {}}><FaVideo /></div>
                    <div className={Styles.footerIcon} onClick={() => {}}><FaMicrophone /></div>
                    {callAccepted && !callEnded ? (
                        <div className={Styles.bgRed + ' ' + Styles.footerIcon} onClick={leaveCall}><FaPhone /></div>
                    ) : ('')}
                    <div className={Styles.footerIcon}><FaEllipsisV /></div>
                </footer>
            </div>

        </div>
    )
}

export default Layout;
