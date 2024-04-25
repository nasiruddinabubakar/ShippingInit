import { Mail } from 'lucide-react';
import Opacity from '../../framer/Opacity';
import OpacityDiv from '../../framer/OpacityDiv';
import styles from './SingleChat.module.css';
import { useEffect, useRef, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
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
  const [messages, setMessages] = useState([]);
  const messageContainerRef = useRef(null);
  const params = useParams();
  const id = params.id;
  const user_id = useSelector((state) => state.user?.user_id);
  const [messageInput, setMessageInput] = useState('');
  const socketRef = useRef(null); // Ref for socket instance
  const company_id = id;

  const handleMessageInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  const sendMessage = () => {
    if (messageInput.trim() === '') {
      return;
    }
console.log("sending");
    socketRef.current?.emit('sendMessage', {
      user_id,
      company_id,
      sender_id:user_id, // Sender's ID
      receiver_id:company_id, // Recipient's ID
      message: messageInput,
    });
    

    // Clear the message input field
    setMessageInput('');
  };

  useEffect(() => {
    // Scroll to the bottom of the container
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
    socketRef.current = io('http://127.0.0.1:5000', {
      auth: {
        token: user_id,
      },
    }); // Replace with your server URL

    // Add event listeners
    socketRef.current.on('connect', () => {
      console.log('Connected to server');
    });
    // Join the chat room corresponding to the user_id and company_id combination
    socketRef.current.emit('joinChatRoom', { user_id, company_id });

    socketRef.current.on(
      'newMessage',
      ({  sender_id, receiver_id, message }) => {
        console.log('Received new message:', {  sender_id, receiver_id, message });
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender_id, receiver_id, message },
        ]);
      }
    );

    // Emit a message to the chat room

    // Remove event listeners
    return () => {
      // socket.emit('bye', user_id);
      socketRef.current.disconnect();
    };
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
          <div className={styles.messages} ref={messageContainerRef}>
            {/* // Messages will be displayed here */}
            {
              // <div className={styles.message}>
              //   <div className={styles.messageAvatar}>
              //     <h4>FT</h4>
              //   </div>
              //   <div className={styles.messageContent}>
              //     <p>Hi, thanks for contacting us, we will reach out shortly</p>
              //   </div>
              //   </div>
              messages.map((message, index) => {
                return (
                  <div
                    className={
                      message.sender_id === user_id
                        ? styles.userMessage
                        : styles.message
                    }
                  >
                    <div className={styles.messageAvatar}>
                      <h4>NA</h4>
                    </div>
                    <div
                      className={
                        message.sender_id === user_id
                          ? styles.userMessageContent
                          : styles.messageContent
                      }
                    >
                      <p>{message.message}</p>
                    </div>
                  </div>
                  // <div className={styles.message}>
                  // <div className={styles.messageAvatar}>
                  //   <h4>FT</h4>
                  // </div>
                  // <div className={styles.messageContent}>
                  //   <p>Can you please state your Order Number ? </p>
                  // </div>
                  // </div>
                  // <div className={styles.userMessage}>
                  // <div className={styles.messageAvatar}>
                  //   <h4>NA</h4>
                  // </div>
                  // <div className={styles.userMessageContent}>
                  //   <p>I believe its something along the lines of i dont give a fuck abouy yall</p>
                  // </div>
                  // </div>
                  // <div className={styles.message}>
                  // <div className={styles.messageAvatar}>
                  //   <h4>FT</h4>
                  // </div>
                  // <div className={styles.messageContent}>
                  //   <p>Sir can you please calm down ? </p>
                  // </div>
                  // </div>
                  // <div className={styles.userMessage}>
                  // <div className={styles.messageAvatar}>
                  //   <h4>NA</h4>
                  // </div>
                  // <div className={styles.userMessageContent}>
                  //   <p>I would literally beat the shit out of you 😂😂😂</p>
                  // </div>
                  // </div>
                );
              })
            }
          </div>
          <div className={styles.newMessage}>
            <input
              type="text"
              placeholder="Type a message"
              className={styles.input}
              onChange={handleMessageInputChange}
            />
            <button className={styles.sendButton}  onClick={sendMessage}>
              <SendIcon sx={{ size: 22 }} />
            </button>
          </div>
        </div>
      </div>
    </Opacity>
  );
};
