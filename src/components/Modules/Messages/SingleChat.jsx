import { Mail } from 'lucide-react';
import Opacity from '../../framer/Opacity';
import OpacityDiv from '../../framer/OpacityDiv';
import styles from './SingleChat.module.css';
import { useEffect, useRef, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchCompanies } from '../../../libs/react-query/api';
import { addChats } from '../../../features/chat/socketSlice';
import { ToastContainer, toast } from 'react-toastify';
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
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  const user_id = localStorage.getItem('user_id');
  const companyName = useSelector((state) => state.socket?.socket);
  const companiesData = useSelector((state) => state.socket?.companyChats);
  const user_name = useSelector((state) => state.user?.user_name);
  console.log(companyName, user_id, id);
  const [messageInput, setMessageInput] = useState('');
  const socketRef = useRef(null); // Ref for socket instance
  const company_id = id;
  console.log(company_id, user_id);
  const queryClient = useQueryClient();
  const handleMessageInputChange = (event) => {
    setMessageInput(event.target.value);
  };
try{
  const sendMessage = () => {
    if (messageInput.trim() === '') {
      return;
    }
    console.log('sending');
    socketRef.current?.emit('sendMessage', {
      user_id,
      company_id,
      sender_id: user_id, // Sender's ID
      receiver_id: company_id, // Recipient's ID
      message: messageInput,
    });

    // Clear the message input field
    setMessageInput('');
  };
  function scrollToBottom() {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }

  useEffect(() => {
    // Scroll to the bottom of the container
    scrollToBottom();
    socketRef.current = io('http://127.0.0.1:5000', {
      auth: {
        token: user_id,
      },
    }); // Replace with your server URL

    // Add event listeners
    socketRef.current.on('connect', () => {
      console.log('Connected to server');
    });
    socketRef.current.on('newnotification', ({ sender_id, message }) => {
      const {name} = companiesData.find(company => company.user_id === sender_id && company_id !== sender_id);
      if(name){
        const audio = new Audio('/notification.mp3');
        audio.play();
        toast.info(`New Message from ${name}`, {
          autoClose: 3000,
          className:'toast_message',
        });

      }
    });
    // Join the chat room corresponding to the user_id and company_id combination
    socketRef.current.emit('joinChatRoom', { user_id, company_id });
    socketRef.current.on('chatHistory', ({ chats }) => {
      console.log('Received chat history:', chats);
      setMessages(chats);
    });
    socketRef.current.on(
      'newMessage',
      ({ sender_id, receiver_id, message }) => {
        console.log('Received new message:', {
          sender_id,
          receiver_id,
          message,
        });
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender_id, receiver_id, message },
        ]);
        scrollToBottom();
      }
    );

    // Emit a message to the chat room

    // Remove event listeners
    return () => {
      // socket.emit('bye', user_id);
      socketRef.current.disconnect();
    };
  }, [company_id]); // This effect runs only once after the component mounts

  return (
    <Opacity>
      <div className={styles.chatWindow}>
        <div className={styles.chatDiv}>
          <div className={styles.chatHeader}>
            <div className={styles.chatAvatar}>
            <ToastContainer/>
              <h4>
                {companyName
                  ?.split(' ')
                  .map((word) => word[0].toUpperCase())
                  .join('')}
              </h4>
            </div>
            <div>
              <h4 className={styles.headingg}>{companyName}</h4>
            </div>
          </div>
          <div className={styles.messages}>
            {/* // Messages will be displayed here */}
            {messages.map((message, index) => {
              return (
                <>
                  <div
                    className={
                      message.sender_id === user_id
                        ? styles.userMessage
                        : styles.message
                    }
                  >
                    <div className={styles.messageAvatar}>
                      <h4>
                        {message.sender_id === user_id
                          ? user_name
                              .split(' ')
                              .map((word) => word[0].toUpperCase())
                              .join('')
                          : companyName
                              .split(' ')
                              .map((word) => word[0].toUpperCase())
                              .join('')}
                      </h4>
                    </div>
                    <div
                      className={
                        message.sender_id === user_id
                          ? styles.userMessageContent
                          : styles.messageContent
                      }
                    >
                      <p style={{color:{}}}>{message.message}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div ref={messageContainerRef}></div>
          <div className={styles.newMessage}>
            <input
              type="text"
              placeholder="Type a message"
              className={styles.input}
              onChange={handleMessageInputChange}
              ref={messageContainerRef}
            />
            <button className={styles.sendButton} onClick={sendMessage}>
              <SendIcon sx={{ size: 22 }} />
            </button>
          </div>
        </div>
      </div>
    </Opacity>
  );}
  catch(err){
    toast.error('An Error Occured',{
      className:'toast_message',
    });
    console.log(err);
    return <div className={styles.chatWindow}>
      <ToastContainer/>
      <h1   style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>Error</h1>
    </div>
    
  }
};
