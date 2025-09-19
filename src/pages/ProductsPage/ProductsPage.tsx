import classes from "./ProductsPage.module.css";

import CategoriesList from "../../components/CategoriesList/CategoriesList";
import SearchBox from "../../components/SearchBox/SearchBox";
import SortBy from "../../components/SortBy/SortBy";
import ProductsList from "../../components/ProductsList/ProductsList";

function ProductsPage() {
    return (
        <section className={classes.products}>
            <div className="container">
                <h1>Products Page</h1>

                <div className={classes.actionsRow}>
                    <SearchBox />
                    <SortBy />
                </div>

                <CategoriesList />
                <ProductsList />
            </div>
        </section>
    );
}

export default ProductsPage;
