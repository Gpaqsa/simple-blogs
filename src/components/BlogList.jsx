import { useEffect } from "react";
import Blog from "./Blog.jsx";
import { useSelector, useDispatch } from 'react-redux';
import {fetchPosts} from "../actions/index.js";



const BlogList = () => {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);


    return (
        <div className="blog-list">
            <h1>Posts</h1>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {posts.length > 0 ? (
                <ul>
                    {posts.map((post) => (
                        <Blog key={post.id} post={post} />
                    ))}
                </ul>
            ) : (
                !loading && <p>No posts available.</p>
            )}
        </div>
    );
};

export default BlogList;
