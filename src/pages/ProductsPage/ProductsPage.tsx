import classes from "./ProductsPage.module.css";

import { useAppDispatch } from "../store/store";
import {
    fetchProductsAction,
    useProductsState,
} from "../store/slices/productsSlice";

import ProductCard from "../../components/ProductCard/ProductCard";

import { useEffect } from "react";

import { filterAndSortProducts } from "../../utils/filter";

import CategoriesList from "../../components/CategoriesList/CategoriesList";
import SearchBox from "../../components/SearchBox/SearchBox";
import SortBy from "../../components/SortBy/SortBy";
import { useFiltersState } from "../store/slices/filtersSlice";

function ProductsPage() {
    const dispatch = useAppDispatch();

    const { products, isFetching } = useProductsState();
    const { search, categories, sortBy } = useFiltersState();

    // Filter data
    const filteredProducts = filterAndSortProducts(products || [], {
        search,
        categories,
        sortBy,
    });

    // Fetch data
    useEffect(() => {
        dispatch(fetchProductsAction());
    }, [dispatch]);

    // Create Content
    let content;

    if (isFetching) {
        content = <p>Loading...</p>;
    }

    if (!isFetching && !filteredProducts.length) {
        content = <p>Can not find products with current filters</p>;
    }

    if (!isFetching && filteredProducts.length) {
        content = filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
        ));
    }

    return (
        <section className={classes.products}>
            <div className="container">
                <h1>Products Page</h1>

                <SearchBox />
                <SortBy />
                <CategoriesList />

                <div className={classes.wrapper}>{content}</div>
            </div>
        </section>
    );
}

export default ProductsPage;
