import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductCategory } from "../../../utils/http";
import { getCategoriesFromUrl, getSearchFromUrl } from "../../../utils/url";

type InitialState = {
    search: string;
    categories: ProductCategory["name"][];
};

const initialState: InitialState = {
    search: getSearchFromUrl(),
    categories: getCategoriesFromUrl(),
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
    },
});

export const { setSearch, toggleCategory } = filtersSlice.actions;
export default filtersSlice.reducer;
