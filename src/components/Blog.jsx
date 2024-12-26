const Blog = (post) => {
    console.log(post.post);
    return (
        <section>
            <h3>{post.post.title}</h3>
            <p>{post.post.body}</p>
        </section>
    )
}
export default Blog