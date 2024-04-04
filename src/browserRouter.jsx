import { createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root.jsx";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
    ],
  },
]);

export default router;
