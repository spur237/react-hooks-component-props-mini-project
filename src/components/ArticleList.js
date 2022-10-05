import Article from "./Article"

export default function ArticleList({ posts }) {
    return (
        <main>
            {posts.map((post) => {
                const {date, id, preview, title,minutes}=post
                return (
                    <Article
                        key={id}
                        title={title}
                        date={date}
                        preview={preview}
                        minutes={minutes}
                    />
                )
            })}
        </main>
    )
}