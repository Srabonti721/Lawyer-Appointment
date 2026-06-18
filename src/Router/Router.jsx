import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import Home from "../components/Home";
import ErrorPage from "../pages/ErrorPage";
import Blogs from "../pages/Blogs/Blogs";
import Booking from "../pages/MyBooking/Booking";
import Lawyers from "../pages/Lawyers/Lawyers";
import LawyerDetails from "../pages/Lawyers/LawyerDetails";
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path:'/',
                 loader:()=>fetch('lawyerData.json'),
                Component: Home
            },
            {
               path:'/lawyers',
               Component:Lawyers
            },
            {
                path:"/lawyers/:id",
                loader:()=>fetch('./lawyerData.json'),
                Component:LawyerDetails
            },
            {
              path:'/booking/:id',
               loader:()=>fetch('../lawyerData.json'),
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