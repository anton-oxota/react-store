import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import RootLayout from "./pages/_layouts/RootLayout";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

const router = createBrowserRouter([
    {
        path: "",
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "products", element: <ProductsPage /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
