import {
    createAsyncThunk,
    createSlice,
    type PayloadAction,
} from "@reduxjs/toolkit";
import { getAllProducts, type Product } from "../../../utils/http";
import { getSearchFromUrl } from "../../../utils/url";

type InitialState = {
    filters: {
        search: string;
    };
    products: Product[] | null;
    isFetching: boolean;
    error: Error | null;
};

const initialState: InitialState = {
    filters: {
        search: getSearchFromUrl(),
    },
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
    reducers: {
        setSearchFilter(state, aciton: PayloadAction<string>) {
            state.filters.search = aciton.payload;
        },
    },
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

export const { setSearchFilter } = productsSlice.actions;
export default productsSlice.reducer;
