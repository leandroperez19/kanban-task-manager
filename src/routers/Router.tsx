import DefaultLayout from "@/layouts/default/DefaultLayout";
import Home from "@/pages/home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <DefaultLayout />
        ),
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
]);

export const Router = () => <RouterProvider router={router} />;