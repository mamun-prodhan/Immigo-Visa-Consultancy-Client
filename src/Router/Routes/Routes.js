import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import ServicesPage from "../../Pages/ServicesPage/ServicesPage";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
          path: '/allservices',
          element: <ServicesPage></ServicesPage>
        },
        {
          path: '/details/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
        }
      ]

    }
  ])

  export default router;