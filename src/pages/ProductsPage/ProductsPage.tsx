import classes from "./ProductsPage.module.css";

import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchProductsAction } from "../store/slices/productsSlice";

import ProductCard from "../../components/ProductCard/ProductCard";

import { useEffect } from "react";
import { filterByCategories, filterBySearch } from "../../utils/filter";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import SearchBox from "../../components/SearchBox/SearchBox";

function ProductsPage() {
    const dispatch = useAppDispatch();

    const { products, isFetching } = useAppSelector(
        (state) => state.productsState
    );
    const { search, categories } = useAppSelector(
        (state) => state.filtersState
    );

    const filteredProducts = filterByCategories(
        filterBySearch(products || [], search),
        categories
    );

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
                <CategoriesList />

                <div className={classes.wrapper}>{content}</div>
            </div>
        </section>
    );
}

export default ProductsPage;
