import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Blog from "../Pages/Blog";
import Services from "../Pages/Services";
import Review from "../Pages/Review";
import PrivateRoute from "./PrivateRoute";
import Signup from "../Pages/Signup";
import MyReviews from "../Pages/MyReviews";
import AddService from "../Pages/AddService";
import EditReview from "../Components/EditReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/myreviews/:uid",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/userReviews/${params.uid}`),
      },
      {
        path: "/addservice",
        element: <AddService></AddService>,
      },
      {
        path: "/editReview/:id",
        element: <EditReview></EditReview>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/editReview/${params.id}`),
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
      },
      {
        path: "/service/:id",
        element: <Review></Review>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
    ],
  },
]);

export default router;
