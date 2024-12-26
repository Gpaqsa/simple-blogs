const initialState = {
    posts: [],
    error: null,
    loading: false,
};


const postsReducer = (state=initialState,action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return {...state, posts:  action.payload, loading: false}
        case "FETCH_BLOGS_ERROR":
            return {
                ...state,
                error: action.error,
                loading: false,
            }
        default :
            return state;
    };
};


export default postsReducer;