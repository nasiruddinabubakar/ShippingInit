// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { io } from 'socket.io-client';

// const SocketContext = createContext();

// export const SocketProvider = ({ children }) => {
//   const [socket, setSocket] = useState(null);
 
//   useEffect(() => {
//     const newSocket = io('http://127.0.0.1:5000',{
//         auth: {
//             token: ,
//         },
        
//     });

//     setSocket(newSocket);

//     // Clean up the socket connection when the component unmounts
//     return () => {
//       newSocket.disconnect();
//     };
//   }, []);

//   return (
//     <SocketContext.Provider value={socket}>
//       {children}
//     </SocketContext.Provider>
//   );
// };

// export const useSocket = () => {
//   return useContext(SocketContext);
// };
