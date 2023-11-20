import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, SignUp, ToggleLoginSignup } from "./components/Modules/auth/Login";
import ShipInfo from "./components/Modules/NewOrder/ships/ShipInfo";
import NewOrder from "./components/Modules/NewOrder/NewOrder";
import RoutesLayout from "./components/Modules/NewOrder/Route/RoutesLayout";
import FeaturedShips from "./components/Modules/NewOrder/ships/FeaturedShips";
import { Layout } from "./components/Modules/UserPanel/Layout";
import { CheckoutPanel } from "./components/Modules/CheckOut/CheckOutPanel";
import { Suspense } from "react";
import SpinnerFullPage from "./components/UI/SpinnerFullPage";

 
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
  element:<FeaturedShips/>,
},
{
  path:'/neworder/routes/ships/ship',
  element: (
    <Suspense fallback={<SpinnerFullPage />}>
      <ShipInfo />
    </Suspense>
  ),
},
{
  path:'/neworder/checkout',
  element:<CheckoutPanel/>,
}

])

function App() {
  return ( <RouterProvider router={router}>
      
  </RouterProvider>
  
  // return (<CheckoutPanel/>
  );
}

export default App;

