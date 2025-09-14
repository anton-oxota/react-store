export function getSearchFromUrl() {
    const url = new URLSearchParams(window.location.search);
    return url.get("search") || "";
}
