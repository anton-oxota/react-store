import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCategories, type ProductCategory } from "../../../utils/http";

type InitialState = {
    categories: ProductCategory[] | null;
    isFetching: boolean;
};

const initialState: InitialState = {
    categories: null,
    isFetching: false,
};

export const fetchAllCategoriesAction = createAsyncThunk(
    "categorys/fetchCategories",
    getAllCategories
);

const categoriesSlice = createSlice({
    name: "categorys",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllCategoriesAction.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(fetchAllCategoriesAction.fulfilled, (state, action) => {
                state.isFetching = false;

                state.categories = action.payload;
            });
    },
});

export default categoriesSlice.reducer;
