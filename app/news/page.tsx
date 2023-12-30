import Post, { PostType } from "../ui/post"
export default async function News() {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  )
  const data = await posts.json()

  return (
    <main className="min-h-screen flex flex-col overflow-hidden">
      <h1 className="text-title1 font-bold text-center py-2 px-7 self-end bg-light rounded-bl-xl">
        Actualités
      </h1>
      <section className="flex flex-col p-10">
        {data.length &&
          data.map((post: PostType, index: number) => (
            <div key={post.id} className="flex flex-col">
              <Post post={post} index={index} />
              {index !== data.length - 1 && (
                <div className="w-1 h-10 bg-medium self-center"></div>
              )}
            </div>
          ))}
      </section>
    </main>
  )
}
