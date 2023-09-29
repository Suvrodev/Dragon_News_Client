import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Home/Category";
import NewsDetailsPage from "../Layout/NewsDetailPage/NewsDetailsPage";
import NewsDetail from "../Pages/Home/NewsDetail/NewsDetail";
import Home2 from "../Pages/Home/Home2";
import About from "../Pages/Others/About/About";
import Career from "../Pages/Others/Career/Career";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/categories/:id',
          element: <Category></Category>
        },
      ]
    },
    {
      path: 'detail',
      element: <NewsDetailsPage></NewsDetailsPage>,
      children:[
        {
          path: '/detail/:id',
          element: <PrivateRoutes><NewsDetail></NewsDetail></PrivateRoutes>
        }
      ]
    },
    {
      path: 'about',
      element: <About></About>
    },
    {
      path: 'career',
      element: <Career></Career>
    },
    {
      path: 'login',
      element: <Login></Login>
    },
    {
      path: 'registration',
      element: <Registration></Registration>
    }
  ]);

  export default router