import Post, { PostType } from "../ui/post"
export default async function News() {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  )
  const data = await posts.json()

  return (
    <main className="p-10">
      <h1 className={"text-title1 font-bold text-center pb-5"}>Actualités</h1>
      <section className="flex flex-col">
        {data.length &&
          data.map((post: PostType, index: number) => (
            <div key={post.id} className="flex flex-col">
              <Post post={post} index={index} />
              {index !== data.length - 1 && (
                <div className="w-[0.5px] h-10 bg-medium self-center"></div>
              )}
            </div>
          ))}
      </section>
    </main>
  )
}
