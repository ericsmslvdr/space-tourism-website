import { createBrowserRouter } from "react-router-dom";
import Home from "./home/home";
import Destination from "./destination/destination";
import Crew from "./crew/crew";
import Technology from "./technology/technology";
import NotFound from "./not-found";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/destination",
        element: <Destination />
    },
    {
        path: "/crew",
        element: <Crew />
    },
    {
        path: "/technology",
        element: <Technology />
    },
    {
        path: "*",
        element: <NotFound />
    }
])