import type { Product } from "./http";

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
