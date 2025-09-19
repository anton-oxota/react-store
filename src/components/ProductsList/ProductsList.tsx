import classes from "./ProductsList.module.css";

import { useEffect } from "react";
import { useAppDispatch } from "../../pages/store/store";
import {
    fetchProductsAction,
    useProductsState,
} from "../../pages/store/slices/productsSlice";
import { useFiltersState } from "../../pages/store/slices/filtersSlice";
import { filterAndSortProducts } from "../../utils/filter";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "../Pagination/Pagination";
import { getTotalPages, splitArray } from "../../utils/pagination";

const ITEMS_ON_PAGE = 6;

function ProductsList() {
    const dispatch = useAppDispatch();

    const { products, isFetching } = useProductsState();
    const { search, categories, sortBy, page } = useFiltersState();

    // Fetch data
    useEffect(() => {
        dispatch(fetchProductsAction());
    }, [dispatch]);

    // Filter data
    const filteredProducts = filterAndSortProducts(products || [], {
        search,
        categories,
        sortBy,
    });

    const totalPages = getTotalPages(filteredProducts, ITEMS_ON_PAGE);

    // Split data into pages
    const splitedProducts = splitArray(filteredProducts, ITEMS_ON_PAGE);

    // Create Content
    let content;

    if (isFetching) {
        content = <p>Loading...</p>;
    }

    if (!isFetching && !filteredProducts.length) {
        content = <p>Can not find products with current filters</p>;
    }

    if (!isFetching && filteredProducts.length) {
        content = splitedProducts[page - 1].map((product) => (
            <ProductCard key={product.id} {...product} />
        ));
    }

    return (
        <>
            <div className={classes.wrapper}>{content}</div>
            {!!totalPages && <Pagination totalPages={totalPages} />}
        </>
    );
}

export default ProductsList;
