import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Semester from './components/CSE/Semester';
import First from './components/First';
import Grades from './components/Grades';
import It from './components/IT/It';
import Csds from './components/CSDS/Csds';
import Enc from './components/ENC/Enc';
import Ece from './components/ECE/Ece';
import Iot from './components/IOT/Iot';
import Mech from './components/MECH/Mech';
import Civil from './components/CIVIL/Civil';
import Env from './components/ENV/Env';
import Rai from './components/RAI/Rai';
import El from './components/EL/El';


const router = createBrowserRouter([

  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/semester",
    element: <Semester/>
  },
  {
    path: "/it",
    element: <It/>
  },
  {
    path: "/ceds",
    element: <Csds/>
  },
  {
    path: "/enc",
    element: <Enc/>
  },
  {
    path: "/el",
    element: <El/>
  },
  {
    path: "/ece",
    element: <Ece/>
  },
  {
    path: "/iot",
    element: <Iot/>
  },
  {
    path: "/mech",
    element: <Mech/>
  },
  {
    path: "/civil",
    element: <Civil/>
  },  
  {
    path: "/env",
    element: <Env/>
  },
  {
    path: "/rai",
    element: <Rai/>
  },
  {
    path: "/grades",
    element: <Grades/>
  }


])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


