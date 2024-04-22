import { Mail, } from 'lucide-react';
import Opacity from '../../framer/Opacity';
import OpacityDiv from '../../framer/OpacityDiv';
import styles from './SingleChat.module.css';
import { useEffect, useRef } from 'react';
import SendIcon from '@mui/icons-material/Send';
export const SingleChatLogo = () => {
 
  return (
    <Opacity>
      <div
        className={styles.chatWindow}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <Mail color="#aaaa" size={450} strokeWidth={0.7} opacity={0.1} />
        </div>
      </div>
    </Opacity>
  );
};

export const SingleChat = () => {
  const messageContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the container
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, []); // This effect runs only once after the component mounts

  return (
    <Opacity>
      <div className={styles.chatWindow}>
        <div className={styles.chatDiv}>
          <div className={styles.chatHeader}>
            <div className={styles.chatAvatar}>
              <h4>FT</h4>
            </div>
            <div>
              <h4 className={styles.headingg}>Forex Traders</h4>
            </div>
          </div>
          <div className={styles.messages}  ref={messageContainerRef}>
                            {/* // Messages will be displayed here */}
            <div className={styles.message}>
              <div className={styles.messageAvatar}>
                <h4>FT</h4>
              </div>
              <div className={styles.messageContent}>
                <p>Hi, thanks for contacting us, we will reach out shortly</p>
              </div>
              </div>
            <div className={styles.userMessage}>
              <div className={styles.messageAvatar}>
                <h4>NA</h4>
              </div>
              <div className={styles.userMessageContent}>
                <p>What About my Order guys ?</p>
              </div>
              </div>
              <div className={styles.message}>
              <div className={styles.messageAvatar}>
                <h4>FT</h4>
              </div>
              <div className={styles.messageContent}>
                <p>Can you please state your Order Number ? </p>
              </div>
              </div>
              <div className={styles.userMessage}>
              <div className={styles.messageAvatar}>
                <h4>NA</h4>
              </div>
              <div className={styles.userMessageContent}>
                <p>I believe its something along the lines of i dont give a fuck abouy yall</p>
              </div>
              </div>
              <div className={styles.message}>
              <div className={styles.messageAvatar}>
                <h4>FT</h4>
              </div>
              <div className={styles.messageContent}>
                <p>Sir can you please calm down ? </p>
              </div>
              </div>
              <div className={styles.userMessage}>
              <div className={styles.messageAvatar}>
                <h4>NA</h4>
              </div>
              <div className={styles.userMessageContent}>
                <p>I would literally beat the shit out of you 😂😂😂</p>
              </div>
              </div>
              <div className={styles.message}>
              <div className={styles.messageAvatar}>
                <h4>FT</h4>
              </div>
              <div className={styles.messageContent}>
                <p>You are Not gonna do SHITTTT </p>
              </div>
              </div>
              <div className={styles.userMessage}>
              <div className={styles.messageAvatar}>
                <h4>NA</h4>
              </div>
              <div className={styles.userMessageContent}>
                <p>I would literally beat the shit out of you</p>
              </div>
              </div>
              <div className={styles.userMessage}>
              <div className={styles.messageAvatar}>
                <h4>NA</h4>
              </div>
              <div className={styles.userMessageContent}>
                <p>I would literally beat the shit out of you</p>
              </div>
              </div>
              <div className={styles.userMessage}>
              <div className={styles.messageAvatar}>
                <h4>NA</h4>
              </div>
              <div className={styles.userMessageContent}>
                <p>I would literally beat the shit out of you</p>
              </div>
              </div>
              <div className={styles.userMessage}>
              <div className={styles.messageAvatar}>
                <h4>NA</h4>
              </div>
              <div className={styles.userMessageContent}>
                <p>I would literally beat the shit out of you</p>
              </div>
              </div>
              <div className={styles.message}>
              <div className={styles.messageAvatar}>
                <h4>FT</h4>
              </div>
              <div className={styles.messageContent}>
                <p>You are Not gonna do SHITTTT </p>
              </div>
              </div>
              <div className={styles.message}>
              <div className={styles.messageAvatar}>
                <h4>FT</h4>
              </div>
              <div className={styles.messageContent}>
                <p>You are Not gonna do SHITTTT </p>
              </div>
              </div>
              <div className={styles.userMessage}>
              <div className={styles.messageAvatar}>
                <h4>NA</h4>
              </div>
              <div className={styles.userMessageContent}>
                <p>I would literally beat the shit out of you</p>
              </div>
              </div>
              
          </div>
          <div className={styles.newMessage}>
            <input
              type="text"
              placeholder="Type a message"
              className={styles.input}
            />
            <button className={styles.sendButton}><SendIcon sx={{size:22}}/></button>

          </div>
        </div>
      </div>
    </Opacity>
  );
};
