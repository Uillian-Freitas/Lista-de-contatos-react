import { configureStore } from "@reduxjs/toolkit";
import contatosReducer from "../reducers/contatosReducer";

export const store = configureStore({
    reducer: {
    contatos: contatosReducer,
    },
});