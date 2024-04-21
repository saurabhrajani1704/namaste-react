import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client" ;
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";


const Grocery=lazy(() => import("./components/Grocery"));

const AppLayout = () =>{
  const [userName,setUserName]=useState();

  //authentication 
  useEffect(()=>{
    //Make an API Call and send username and password 
    const data={
      name:"Saurabh Rajani",
    };
    setUserName(data.name);

  },[]);

  return(
    <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName}}>
          <div className="app ">
            <Header />
            <Outlet />
            <Footer />
          </div>
        </UserContext.Provider>
    </Provider>
    
  )
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children:[
      {
        path:"/",
        element: <Body/>,
      },

      {
        path:"/about",
        element: <About/>, 
      },

      {
        path:"/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
      },
    
      {
        path:"/contact",
        element: <Contact/> 
      },
      {
        path:"/restaurant/:resId",
        element: <RestaurantMenu /> 
      },
      {
        path:"/Cart",
        element: <Cart /> 
      }
    ],
    errorElement: <Error />,
  },

  

]);



const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); 