import classes from "./CategoriesList.module.css";

import { useEffect } from "react";
import { useAppDispatch } from "../../pages/store/store";
import {
    fetchAllCategoriesAction,
    useCategoriesState,
} from "../../pages/store/slices/categoriesSlice";
import type { ProductCategory } from "../../utils/http";
import {
    toggleCategory,
    useFiltersState,
} from "../../pages/store/slices/filtersSlice";
import { useSearchParams } from "react-router";

function CategoriesList() {
    const [, setSearchParams] = useSearchParams();

    const dispatch = useAppDispatch();
    const { categories } = useCategoriesState();
    const { categories: filterCategories } = useFiltersState();

    // Fetch Categories
    useEffect(() => {
        dispatch(fetchAllCategoriesAction());
    }, [dispatch]);

    // Set URL
    useEffect(() => {
        setSearchParams((prevSearchParams) => {
            if (filterCategories.length) {
                prevSearchParams.set("categories", filterCategories.join(","));
            } else {
                prevSearchParams.delete("categories");
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
