import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, SignUp, ToggleLoginSignup } from "./components/Modules/auth/Login";
import ShipInfo from "./components/Modules/NewOrder/ships/ShipInfo";
import NewOrder from "./components/Modules/NewOrder/NewOrder";
import RoutesLayout from "./components/Modules/NewOrder/Route/RoutesLayout";

import { Layout } from "./components/Modules/UserPanel/Layout";
 
const router = createBrowserRouter([{

  path:'/',
  
  element:<Login/>
},
{
  path:'/user/dashboard',
  element:<Layout/>
},
{
  path:'/user/neworder',
  element:<NewOrder/>,
},
{
  path:'/neworder/routes',
  element:<RoutesLayout/>,
},
{
  path:'/neworder/routes/ships',
  element:<ShipInfo/>,
}

])

function App() {
  return ( <RouterProvider router={router}>
      
  </RouterProvider>
  
  // return (<ShipInfo/>
  );
}

export default App;

