import type { SortByType } from "../pages/store/slices/filtersSlice";
import type { Product, ProductCategory } from "./http";

export function filterBySearch(productsArray: Product[], search: string) {
    const formatedSearch = search.trim().toLowerCase();

    if (!formatedSearch) return productsArray;

    const data = productsArray.filter((product) => {
        return (
            product.title.toLowerCase().includes(formatedSearch) ||
            product.description.toLowerCase().includes(formatedSearch)
        );
    });

    return data;
}

export function filterByCategories(
    productsArray: Product[],
    categories: ProductCategory["name"][]
) {
    if (!categories.length) return productsArray;

    return productsArray.filter((product) => {
        return categories.includes(product.category.name);
    });
}

export function sortProductsBy(productsArray: Product[], sortBy: SortByType) {
    const data = [...productsArray];

    switch (sortBy) {
        case "a-z":
            return data.sort((a, b) => {
                return a.title.localeCompare(b.title);
            });
        case "z-a":
            return data.sort((a, b) => {
                return b.title.localeCompare(a.title);
            });
        case "price-high":
            return data.sort((a, b) => {
                return b.price - a.price;
            });
        case "price-low":
            return data.sort((a, b) => {
                return a.price - b.price;
            });

        default:
            return productsArray;
    }
}

export function filterAndSortProducts(
    productsArray: Product[],
    filters: {
        search: string;
        categories: ProductCategory["name"][];
        sortBy: SortByType;
    }
) {
    const { categories, search, sortBy } = filters;

    return sortProductsBy(
        filterByCategories(filterBySearch(productsArray, search), categories),
        sortBy
    );
}
