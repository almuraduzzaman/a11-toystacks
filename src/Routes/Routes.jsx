import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import AddToy from "../Pages/AddToy/AddToy";
import PrivateRoutes from "./PrivateRoutes";
import ToysAddedByMe from "../Pages/ToysAddedByMe/ToysAddedByMe";
import UpdateToyData from "../Pages/UpdateToyData/UpdateToyData";
import LoadingSpinner from "../Shared/LoadingSpinner";
import SingleToyDetails from "../Pages/SingleToyDetails/SingleToyDetails";
import ErrorPage from "../Shared/ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signUp',
                element: <SignUp/>
            },
            {
                path: '/all_toys',
                element: <AllToys/>
            },
            {
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/add_toy',
                element: <PrivateRoutes> <AddToy/></PrivateRoutes>
            },
            {
                path: '/my_toys',
                element: <PrivateRoutes><ToysAddedByMe/></PrivateRoutes>
            },
            {
                path: '/update_toy_data/:id',
                element: <PrivateRoutes><UpdateToyData/></PrivateRoutes>,
                loader: ({params})=> fetch(`https://a11-toystacks-server.vercel.app/all-toys/${params.id}`)
            },
            {
                path: '/single_toy_details/:id',
                element: <PrivateRoutes><SingleToyDetails/></PrivateRoutes>,
                loader: ({params})=> fetch(`https://a11-toystacks-server.vercel.app/all-toys/${params.id}`)
            },
            {
                path: '/loadingSpinner',
                element: <LoadingSpinner/>,
            },
        ]
    },
]);

export default router;