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
import Home from '../Components/Home';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Details from '../Components/Details';
import Loader from '../Components/Loader';
import Private from '../Components/Private';
import Modal from '../Components/Modal';
import Categories from '../Components/Categories';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Loader><RootLayout></RootLayout></Loader>,
     hydrateFallbackElement:<Loader></Loader>,
    children:[
      {
        index:true,
        element:<Home></Home>,
        loader: ()=> fetch('http://localhost:3000/featured')

      },
      {
        path:'/allArticles',
        element:<AllArticles></AllArticles>,
        loader:()=> fetch('http://localhost:3000/posts')

      },
      {
        path:'/myArticles',
        element:<Private><MyArticles></MyArticles></Private>
      },
      {
        path:'/postArticles',
        element:<Private><PostArticle></PostArticle></Private>
      },
      {
        path:'/aboutUs',
        element:<AboutUs></AboutUs>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path:'/posts/:id',
        element:<Details></Details>,
        loader: ()=> fetch('http://localhost:3000/posts')
      },
       {
        path:'/update/:id',
        element:<Private><Modal></Modal></Private>,
        loader:({params})=> fetch(`http://localhost:3000/myPosts/${params.id}`)
      },
      {
        path:'/category/:category',
        element:<Categories></Categories>
      }
    ],

    
  },
  {
    path:'*',
    element:<Error></Error>
  }
  
]);

export default router;