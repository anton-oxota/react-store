import { useDispatch, useSelector } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./slices/productsSlice";
import categoriesReducer from "./slices/categoriesSlice";
import filtersReducer from "./slices/filtersSlice";

const store = configureStore({
    reducer: {
        productsState: productsReducer,
        categoriesState: categoriesReducer,
        filtersState: filtersReducer,
    },
});

type RootState = ReturnType<typeof store.getState>;
type DispatchType = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<DispatchType>();

export default store;
