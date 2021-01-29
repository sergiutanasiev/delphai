import { createStore,  } from "@reduxjs/toolkit";
import { reducer as searchReducer } from './reducers/searchReducer'

export const store = createStore(
    searchReducer
)