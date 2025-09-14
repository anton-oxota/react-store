export function getSearchFromUrl() {
    const url = new URLSearchParams(window.location.search);
    return url.get("search") || "";
}

export function getCategoriesFromUrl() {
    const url = new URLSearchParams(window.location.search);
    return url.get("categories")?.split(",") || [];
}
