import React from 'react'; 
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; // Import createBrowserRouter
import { createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx'; // Assuming you have an About component
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact/Contact.jsx'; // Your Contact Us component
import User from './User/User.jsx';

import Github, {githubInfoLoader} from './Components/Github/Github.jsx';




export default App;

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about", // Use a distinct path for About
//         element: <About />
//       },
//       {
//         path: "contact", // Use a distinct path for About
//         element: <Contact />
//       },

//     ]
//   }
// ]);


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
    <Route path='' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
    <Route path='user/:userid' element={<User />} />
    <Route loader={githubInfoLoader}
     path='/github' element={<Github />} />

    </Route>

    
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
