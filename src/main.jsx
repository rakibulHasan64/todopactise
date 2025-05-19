import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Home';
import AddFrome from './componet/AddFrome';
import Items from './componet/Items';
import Detlis from './componet/Detlis';
import AddToCart from './componet/AddToCart';
import AddToCat from './context/AddToCat';
import Updated from './componet/Updated';




// Define routes with loaders
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
    
      },

      {
        path: "/add",
        element: <AddFrome />
      },

      {

        path: "/data",
        element:<Items />
      },
      {
        path: "/da/:id",
        element: <Detlis />
      },
      {
        path: "/add-to-cart",
        element:<AddToCart />
      },
      {
        path: "/updated/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:4000/updated/${params.id}`),
        element: <Updated />,
      }
      
      
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddToCat>
      <RouterProvider router={router} />

    </AddToCat>
    
  </StrictMode>
);
