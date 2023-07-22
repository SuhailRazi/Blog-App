import { createBrowserRouter, Outlet, RouterProvider  } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Single from "./pages/Single";
import Write from "./pages/write";
import "./style.scss";


const Layout = () =>{
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}


const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children :[
      {
        path : "/",
        element: <Home/>
      },
      {
        path : "/post/:id",
        element: <Single/>
      },
      {
        path : "/write",
        element: <Write/>
      },
    ]
  },
  {
    path : "/login",
    element : <Login/>
  },
  {
    path : "/register",
    element :  <Register />
  }
])

function App() {
  return(
    <div className="app" >
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}



export default App;
