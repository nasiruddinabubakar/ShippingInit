import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, SignUp, ToggleLoginSignup } from "./components/Modules/auth/Login";

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
  path:'/user/routes',
  element:<RoutesLayout/>,
}

])

function App() {
  return ( <RouterProvider router={router}>
      
  </RouterProvider>
  
  );
}

export default App;

