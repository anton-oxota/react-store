import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        productsState: productsReducer,
    },
});

type RootState = ReturnType<typeof store.getState>;
type DispatchType = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<DispatchType>();

export default store;
