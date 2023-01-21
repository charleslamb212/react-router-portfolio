

function Blog(props)  {
    return (
        <div>
            <h1>Blog</h1>
            {props.posts.map((post, index) => (
                <div key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default Blog;