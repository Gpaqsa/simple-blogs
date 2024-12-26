const initialState = {
    users: [],
    error: null,
    loading: false,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return {...state,  users: action.payload, loading: false};
        case "FETCH_USERS_ERROR":
            return {
                ...state,
                error: action.error,
                loading: false,
            }
        default :
            return state
    }
}

export default usersReducer;