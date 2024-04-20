import { Mail } from 'lucide-react';
import Opacity from '../../framer/Opacity';
import OpacityDiv from '../../framer/OpacityDiv';
import styles from './SingleChat.module.css';

export const SingleChatLogo = () => {
  return (
    <Opacity>
      <div className={styles.chatWindow} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div><Mail color='#aaaa' size={450} strokeWidth={0.7} opacity={0.1}/></div>
      </div>
    </Opacity>
  );
};

export const SingleChat = () => {
  return(
  <Opacity>
    <div className={styles.chatWindow}>

    </div>
  </Opacity>);
};
