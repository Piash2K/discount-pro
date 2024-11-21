import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './layouts/HomeLayout';
import Home from './components/Home';
import Brands from './components/Brands';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Profile from './components/Profile';
import BrandDetails from './components/BrandDetails';
import ForgetPassword from './components/ForgetPassword';
import UpdateProfile from './components/UpdateProfile';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async()=>{
          const response = await fetch('/ecommerce_coupons.json');
          const brandsData = await response.json();
          return brandsData;
        }
      },
      {
        path: '/brands',
        element: <Brands></Brands>,
        loader: async()=>{
          const response = await fetch('/ecommerce_coupons.json');
          const brands = await response.json();
          return brands;
        }
      },
      {
        path: '/brands/brand/:id',
        element: <PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>,
        loader: async ({ params }) => {
          const response = await fetch('/ecommerce_coupons.json'); // Fetch all brand data
          const brands = await response.json();
          return brands.find((brand) => brand._id === params.id); // Find the specific brand by ID
        }
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile> </PrivateRoute>
      },
      {
        path:'/update-profile',
        element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: '/dev',
        element: <h2>about</h2>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/forget-password',
        element: <ForgetPassword></ForgetPassword>
      }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)