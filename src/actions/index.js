import jsonPlaceholder from "../assets/jsonPlaceholder.js";

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS' , payload : response.data });
};

export const fetchUsers = () => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users`);
    dispatch({ type : 'FETCH_USER' , payload : response.data });
};



//
// useEffect(() => {
//     const fetchPosts = async () => {
//         try {
//             const response = await jsonPlaceholder.get('/posts');
//             dispatch({ type: 'FETCH_POSTS', payload: response.data }); // Dispatch to Redux store
//         } catch (err) {
//             setError("Failed to fetch posts. Please try again.");
//             console.error("Error fetching posts:", err);
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     fetchPosts();
// }, [dispatch]);

// useEffect(() => {
//     const getUsers = async () => {
//         setLoading(true);
//         try {
//             const fetchedUsers = await fetchUsers();
//             dispatch({type: 'FETCH_USERS', payload: fetchedUsers.data});
//         } catch (err) {
//             setError("Failed to load users. Please try again."); // Set a meaningful error message
//             console.error(err);
//         } finally {
//             setLoading(false);
//         }
//     };
//     getUsers();
// }, []);