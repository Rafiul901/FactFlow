import React from 'react';
import {
  createBrowserRouter,

} from "react-router";
import RootLayout from '../Components/RootLayout';
import Error from './Error';
import AllArticles from '../Components/AllArticles';
import MyArticles from '../Components/MyArticles';
import PostArticle from '../Components/PostArticle';
import AboutUs from '../Components/AboutUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {
        path:'/allArticles',
        element:<AllArticles></AllArticles>
      },
      {
        path:'/myArticles',
        element:<MyArticles></MyArticles>
      },
      {
        path:'/postArticles',
        element:<PostArticle></PostArticle>
      },
      {
        path:'/aboutUs',
        element:<AboutUs></AboutUs>
      }
    ],

    
  },
  {
    path:'*',
    element:<Error></Error>
  }
  
]);

export default router;