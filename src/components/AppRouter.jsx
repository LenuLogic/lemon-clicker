import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Clicker from "../pages/Clicker";
import Credits from "../pages/Credits";
import ErrorPage from "../pages/ErrorPage";
import Root from "../components/Root";
import Settings from "../pages/Settings";
import Store from "../pages/Store";

function AppRouter(props) {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root items={props.stats.itemstobuy} />,
            errorElement: <ErrorPage />,
            children: [
                { path: "", element: <Clicker stats={props.stats} handleClick={props.handleClick} /> },
                { path: "store", element: <Store stats={props.stats} />},
                { path: "settings", element: <Settings stats={props.stats} /> },
                { path: "credits", element: <Credits stats={props.stats} /> },
            ]
        }
    ]);
    return (
        <RouterProvider router={router} />
    );
}

export default AppRouter;