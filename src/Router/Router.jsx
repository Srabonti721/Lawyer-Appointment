import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import Home from "../components/Home";
import ErrorPage from "../pages/ErrorPage";
import Blogs from "./Blogs/Blogs";
import Booking from "./MyBooking/Booking";
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
              path:'/booking',
              Component:Booking
            },
            {
                path:'/blog',
                Component:Blogs
            }
        ]
    },
    //   {
    //     path:'*',
    //     Component:ErrorPage
    //   }
]);