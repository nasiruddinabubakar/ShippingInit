export async function getOrders() {
    try {
    
      const res = await fetch('http://127.0.0.1:5000/api/orders/history', {
        headers: {
          authorization: `${localStorage.getItem('user')}`,
        },
      });
      const response = await res.json();
      console.log(response);
      return response.orders;
    }catch(err){
      console.error(err.message);
    }

}

async function onclickdel(booking_id) {
  console.log('hello transit');
  const res = await fetch(`http://127.0.0.1:5000/api/orders/${booking_id}`, {
    method: 'DELETE',
    headers: {
      authorization: `${localStorage.getItem('user')}`,
    },
  });
  await res.json();
}
