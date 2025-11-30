import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import AppDetails from '../pages/AppDetails/AppDetails';
import MyInstallation from '../pages/MyInstalation/MyInstalation';
import AppError from '../pages/AppError/AppError';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <AppError /> ,
    children: [
        {
            index: true,
            path:"/",
            Component: Home
        },
        {
          path: "apps",
          Component: Apps
        },
        {
        path: "apps/:id",
        Component: AppDetails
      },
        
        {
          path: "installation",
          Component: MyInstallation
        }
    ]
  },
   {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
  
]);