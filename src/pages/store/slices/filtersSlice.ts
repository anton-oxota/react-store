import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductCategory } from "../../../utils/http";
import { getCategoriesFromUrl, getSearchFromUrl } from "../../../utils/url";
import { useAppSelector } from "../store";

export type SortByType = "default" | "a-z" | "z-a" | "price-high" | "price-low";

type InitialState = {
    search: string;
    categories: ProductCategory["name"][];
    sortBy: SortByType;
};

const initialState: InitialState = {
    search: getSearchFromUrl(),
    categories: getCategoriesFromUrl(),
    sortBy: "default",
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
        },
        toggleCategory(state, action: PayloadAction<ProductCategory["name"]>) {
            const existingCategory = state.categories.includes(action.payload);

            if (existingCategory) {
                state.categories = state.categories.filter(
                    (category) => category !== action.payload
                );
            } else {
                state.categories.push(action.payload);
            }
        },
        setSortBy(state, action: PayloadAction<InitialState["sortBy"]>) {
            state.sortBy = action.payload;
        },
    },
});

export const useFiltersState = () =>
    useAppSelector((state) => state.filtersState);

export const { setSearch, toggleCategory, setSortBy } = filtersSlice.actions;
export default filtersSlice.reducer;
