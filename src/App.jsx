import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import {
  Login,
  SignUp,
  ToggleLoginSignup,
} from './components/Modules/auth/Login';
import ShipInfo from './components/Modules/NewOrder/ships/ShipInfo';
import NewOrder from './components/Modules/NewOrder/NewOrder';
import RoutesLayout from './components/Modules/NewOrder/Route/RoutesLayout';
import FeaturedShips from './components/Modules/NewOrder/ships/FeaturedShips';
import { Layout } from './components/Modules/UserPanel/Layout';
import { CheckoutPanel } from './components/Modules/CheckOut/CheckOutPanel';
import { Suspense } from 'react';
import SpinnerFullPage from './components/UI/SpinnerFullPage';
import { CurrentOrders } from './components/Modules/UserPanel/CurrentOrders';
import { PreviousOrders } from './components/Modules/UserPanel/PreviousOrders';
import { SingleOrder } from './components/Modules/UserPanel/SingleOrder';
import { Inbox } from './components/Modules/Messages/Inbox';
import { SingleChat, SingleChatLogo } from './components/Modules/Messages/SingleChat';

const router = createBrowserRouter([
  {
    path: '/',

    element: <Login />,
  },
  {
    path: '/user/dashboard',
    element: <Layout />,
  },
  {
    path: '/user/neworder',
    element: <NewOrder />,
  },
  {
    path: '/neworder/routes',
    element: <RoutesLayout />,
  },
  {
    path: '/neworder/routes/ships',
    element: <FeaturedShips />,
  },
  {
    path: '/neworder/routes/ships/:id',
    element: (
      <Suspense fallback={<SpinnerFullPage />}>
        <ShipInfo />
      </Suspense>
    ),
  },
  {
    path: '/neworder/checkout',
    element: <CheckoutPanel />,
  },
]);

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="" element={<Layout />}>
        <Route path="" index element={<PreviousOrders />} />
        <Route path="/:id" index element={<SingleOrder />} />
        <Route path="/current-orders" element={<CurrentOrders />} />
        <Route path="/account-info" element={<Layout />} />
      </Route>
      <Route path="/user/inbox" element={<Inbox />}>
        <Route path="/user/inbox/" index element={<SingleChatLogo />} />
        <Route path="/user/inbox/msg"  element={<SingleChat />} />
      </Route>

      <Route path="/user/neworder" element={<NewOrder />} />
      <Route path="/neworder/routes" element={<RoutesLayout />} />
      <Route path="/neworder/routes/ships" element={<FeaturedShips />} />
      <Route path="/neworder/routes/ships/:id" element={<ShipInfo />} />
      <Route path="/neworder/checkout" element={<CheckoutPanel />} />
    </Routes>

    // return (<CheckoutPanel/>
  );
}

export default App;
