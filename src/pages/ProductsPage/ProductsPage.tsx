import classes from "./ProductsPage.module.css";

import { useAppDispatch, useAppSelector } from "../store/store";
import {
    fetchProductsAction,
    setSearchFilter,
} from "../store/slices/productsSlice";

import ProductCard from "../../components/ProductCard/ProductCard";

import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { filterBySearch } from "../../utils/filter";

function ProductsPage() {
    const dispatch = useAppDispatch();
    const [, setSearchParams] = useSearchParams();

    const {
        products,
        isFetching,
        filters: { search },
    } = useAppSelector((state) => state.productsState);

    const filteredProducts = filterBySearch(products || [], search);

    // Fetch data
    useEffect(() => {
        dispatch(fetchProductsAction());
    }, [dispatch]);

    function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!event.target) return;

        // Get data from form
        const fd = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(fd.entries()) as { search: string };

        // Set Filter
        dispatch(setSearchFilter(data.search));

        // Set URL
        setSearchParams({ search: data.search });
    }

    return (
        <section className={classes.products}>
            <div className="container">
                <h1>Products Page</h1>

                <form className={classes.form} onSubmit={handleSearchSubmit}>
                    <input
                        defaultValue="Cap"
                        type="text"
                        placeholder="Enter product title..."
                        name="search"
                    />
                    <button>Search</button>
                </form>

                <div className={classes.wrapper}>
                    {isFetching && <p>Loading...</p>}
                    {!isFetching &&
                        products &&
                        filteredProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                </div>
            </div>
        </section>
    );
}

export default ProductsPage;
