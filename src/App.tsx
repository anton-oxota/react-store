import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import RootLayout from "./pages/layouts/RootLayout";

const router = createBrowserRouter([
    {
        path: "",
        element: <RootLayout />,
        children: [{ index: true, element: <HomePage /> }],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
