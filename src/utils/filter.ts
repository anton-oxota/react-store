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
