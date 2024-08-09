export async function getOrders() {
    try {
    
      const res = await fetch('https://ship-backend-qmsc.onrender.com/api/orders/history', {
        headers: {
          authorization: `${localStorage.getItem('user')}`,
        },
      });
      const response = await res.json();
      console.log("api called ! ");
      console.log(response);
      return response.orders;
    }catch(err){
      console.error(err.message);
    }

}
export async function getAllCountries () {
 
  try{

  const res = await fetch('https://ship-backend-qmsc.onrender.com/api/countries',{
    method: 'GET',
  });
  const data = await res.json();
  console.log(data);
  return data;
}
catch(err){
  console.error(err.message);
}
}
async function deleteOrder(booking_id) {
  console.log('hello transit');
  const res = await fetch(`https://ship-backend-qmsc.onrender.com/api/orders/${booking_id}`, {
    method: 'DELETE',
    headers: {
      authorization: `${localStorage.getItem('user')}`,
    },
  });
  return await res.json();
}

export   async function fetchCompanies(user_id) {
  const response = await fetch(
    'https://ship-backend-qmsc.onrender.com/api/messages/get-user-chats',
    {
     
      headers: { userID: user_id },
    }
  );
  return await response.json();

}