import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, SignUp, ToggleLoginSignup } from "./components/Modules/auth/Login";
import { Layout } from "./components/Modules/UserPanel/Layout";
 
const router = createBrowserRouter([{

  path:'/',
  
  element:<Login/>
},
{
  path:'/user/dashboard',
  element:<Layout/>
}

])

function App() {
  return ( <RouterProvider router={router}>
      
  </RouterProvider>
  
  );
}

export default App;

