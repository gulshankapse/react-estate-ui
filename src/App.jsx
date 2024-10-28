import Layout from "./routes/layout/layout.jsx"
import HomePage from "./routes/homePage/homePage.jsx"
import ListPage from "./routes/listPage/listPage.jsx"
import LoginPage from "./routes/loginPage/loginPage.jsx"
import DetailsPage from "./routes/detailsPage/detailsPage.jsx"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        { 
          path: "/",
          element: <HomePage/>
        },
        { 
          path: "/list",
          element: <ListPage/>
        },
        { 
          path: "/login",
          element: <LoginPage/>
        },
        { 
          path: "/:id",
          element: <DetailsPage/>
        }
      ]
      
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App