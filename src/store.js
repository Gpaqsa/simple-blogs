import {configureStore} from "@reduxjs/toolkit";
import postsReducer from "./reducers/postsSlice.js";
import usersReducer from "./reducers/usersSlice.js";

const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
    }
})

export default store;