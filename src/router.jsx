import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProtectedRouter from "./ProtectedRouter";
import Checkout from "./pages/checkout/Checkout";
import Profile from "./pages/profile/Profile";
import ProfileInfo from "./pages/profile/ProfileInfo";
import ProfileOrders from "./pages/profile/ProfileOrders";
import ForgetPass from "./pages/Pass/ForgetPass";
import Verify from "./pages/Pass/Verify";
import ProductsByCategory from "./pages/products/ProductsByCategory";
import Shop from "./pages/shop/Shop";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:'shop',
                element: <Shop />
            },
            {
                path: 'Products/:id',
                element: <ProductDetails />
            },
            {
                path: 'ProductsByCategory/:id',
                element: <ProductsByCategory />
            },
            {
                path: 'cart',
                element: <ProtectedRouter>
                    <Cart />
                </ProtectedRouter>
            },
            {
                path: 'checkout',
                element: <ProtectedRouter>
                    <Checkout />
                </ProtectedRouter>
            },
            {
                path: 'profile',
                element: <ProtectedRouter>
                    <Profile />
                </ProtectedRouter>,
                children:[
                    {
                        index:true,
                        element:<ProfileInfo/>
                    },
                    {
                        path:'orders',
                        element:<ProfileOrders/>
                    }
                ]
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
        {
                path: 'forgetPass',
                element: <ForgetPass />
            },
        {
                path: 'verify',
                element: <Verify/>
            },]
    }

]);

export default router;