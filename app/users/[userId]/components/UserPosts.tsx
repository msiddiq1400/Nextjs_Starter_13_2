type Props = {
    promise: Promise<Post[]>
}

export default async function UserPosts({ promise }: Props) {
    const posts = await promise
    const conent = posts.map(post => {
        return (
            <article key={post.id}>
                <h2>{post.title}</h2>
                <br />
                <p>{post.body}</p>
            </article>
        )
    })
    return conent
}   