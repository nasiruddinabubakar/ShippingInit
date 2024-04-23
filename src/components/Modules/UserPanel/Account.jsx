import { useEffect, useState } from 'react';
import styles from './Account.module.css';
import Opacity from '../../framer/Opacity';
const Account = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [account, setAccount] = useState({});
  useEffect(() => {
    async function getAccount() {
      const authToken = localStorage.getItem('user');
      if (authToken) {
        setIsLoading(true);
        const res = await fetch('http://127.0.0.1:5000/api/users/getuser', {
          headers: {
            authorization: authToken,
          },
        });
        const response = await res.json();
        console.log(response);
        setAccount(response[0]);
        setIsLoading(false);
      }
    }
    getAccount();
  }, []);

  try{
  return (
    <Opacity>
    <div className={styles.Div}>
    <div className={styles.userHead}>
      <div className={styles.chatAvatar}>
        <h4>{account.Name?.split(' ').map(word => word[0].toUpperCase()).join('')}</h4>
      </div>
    </div>
  

      <div className={styles.info}>
        <h4>Full Name: {account?.Name}</h4>
        <h4>Email: {account?.email}</h4>
        <h4>Phone: 0{account?.Phone_no}</h4>
        <h4>Address: {account?.Address}</h4>
      </div>
    </div>
    </Opacity>
  );

}catch(e){
  console.log(e);
  return <h1>error</h1>
}
};

export default Account;
