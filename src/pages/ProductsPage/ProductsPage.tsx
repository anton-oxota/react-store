import { useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useAppDispatch, useAppSelector } from "../store/store";
import classes from "./ProductsPage.module.css";
import { fetchProductsAction } from "../store/slices/productsSlice";

function ProductsPage() {
    const dispatch = useAppDispatch();
    const { products, isFetching } = useAppSelector(
        (state) => state.productsState
    );

    useEffect(() => {
        dispatch(fetchProductsAction());
    }, [dispatch]);

    return (
        <section className={classes.products}>
            <div className="container">
                <h1>Products Page</h1>

                <div className={classes.wrapper}>
                    {isFetching && <p>Loading...</p>}
                    {!isFetching &&
                        products &&
                        products.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                </div>
            </div>
        </section>
    );
}

export default ProductsPage;
