export function createButtonsIndexArray(
    totalPages: number,
    activePage: number
) {
    const pagesArray = [];
    const updatedPagesArray = [];

    for (let i = 1; i <= totalPages; i++) {
        pagesArray.push(i);
    }

    if (totalPages < 10) return pagesArray;

    if (activePage <= 3 || activePage >= totalPages - 2) {
        updatedPagesArray.push(
            ...pagesArray.slice(0, 4),
            "...",
            ...pagesArray.slice(pagesArray.length - 4)
        );

        return updatedPagesArray;
    }

    if (activePage > 3 && activePage < totalPages - 2) {
        updatedPagesArray.push(
            pagesArray.at(0),
            "...",
            ...pagesArray.slice(activePage - 2, activePage + 1),
            "...",
            pagesArray.at(-1)
        );

        return updatedPagesArray;
    }

    return pagesArray;
}

export function getTotalPages<T>(array: T[], itemsQuantity: number) {
    return Math.ceil(array.length / itemsQuantity);
}

export function splitArray<T>(array: T[], itemsQuantity: number) {
    const totalPages = getTotalPages(array, itemsQuantity);
    const newArray = [];

    for (let i = 0; i < totalPages; i++) {
        newArray.push(array.slice(i * itemsQuantity, (i + 1) * itemsQuantity));
    }

    return newArray;
}
