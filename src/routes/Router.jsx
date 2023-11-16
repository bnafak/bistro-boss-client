import {createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/home/menu/Menu";
import Order from "../pages/home/order/Order";
import OrderTab from "../pages/home/order/OrderTab";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: '/orderTab',
          element: <OrderTab></OrderTab>
        }
      ]
    },
  ]);