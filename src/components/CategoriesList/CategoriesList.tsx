import classes from "./CategoriesList.module.css";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../pages/store/store";
import { fetchAllCategoriesAction } from "../../pages/store/slices/categoriesSlice";
import type { ProductCategory } from "../../utils/http";
import { toggleCategory } from "../../pages/store/slices/filtersSlice";
import { useSearchParams } from "react-router";

function CategoriesList() {
    const [, setSearchParams] = useSearchParams();

    const dispatch = useAppDispatch();
    const { categories } = useAppSelector((state) => state.categoriesState);
    const { categories: filterCategories } = useAppSelector(
        (state) => state.filtersState
    );

    // Fetch Categories
    useEffect(() => {
        dispatch(fetchAllCategoriesAction());
    }, [dispatch]);

    // Set URL
    useEffect(() => {
        setSearchParams((prevSearchParams) => {
            if (filterCategories.length) {
                prevSearchParams.set("categories", filterCategories.join(","));
            }
            return prevSearchParams;
        });
    }, [filterCategories, setSearchParams]);

    function handleChooseCategory(categoryName: ProductCategory["name"]) {
        dispatch(toggleCategory(categoryName));
    }

    return (
        <ul className={classes.categories}>
            {categories &&
                categories.map(({ name, id }) => {
                    const categoryClass = filterCategories.includes(name)
                        ? classes.active
                        : undefined;

                    return (
                        <li
                            className={categoryClass}
                            onClick={() => handleChooseCategory(name)}
                            key={id}
                        >
                            {name}
                        </li>
                    );
                })}
        </ul>
    );
}

export default CategoriesList;
