import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts, type Product } from "../../../utils/http";

type InitialState = {
    products: Product[] | null;
    isFetching: boolean;
    error: Error | null;
};

const initialState: InitialState = {
    products: null,
    isFetching: false,
    error: null,
};

export const fetchProductsAction = createAsyncThunk(
    "products/fetchProducts",
    getAllProducts
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch Products
            .addCase(fetchProductsAction.pending, (state) => {
                state.isFetching = true;
                state.error = null;
            })
            .addCase(fetchProductsAction.fulfilled, (state, action) => {
                state.isFetching = false;
                state.error = null;
                state.products = action.payload;
            })
            .addCase(fetchProductsAction.rejected, (state) => {
                state.isFetching = false;
                // state.error = action.payload;
            });
    },
});

export default productsSlice.reducer;
