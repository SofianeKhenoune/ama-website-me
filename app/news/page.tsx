import Link from "next/link"
import { RxAvatar } from "react-icons/rx"
import { users } from "../data/users"

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export default async function New() {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  )
  const data = await posts.json()

  return (
    <main>
      <h1 className={"text-title1 font-bold text-center pb-5"}>Actualités</h1>
      <section>
        {data.length &&
          data.map((post: Post) => (
            <article
              key={post.id}
              className="p-3 m-3 flex flex-col rounded-lg bg-primary text-justify shadow shadow-['rgba(0,0,0,0.2)_0px_0px_5px'] "
            >
              <h2 className={"text-title2 font-bold"}>
                {post.title.replace(/^\w/g, (l) => l.toUpperCase())}
              </h2>
              <div className="flex gap-2 items-center">
                <RxAvatar />
                <p className={"underline font-bold"}>
                  {users.filter((user) => user.id === post.userId)[0].name}
                </p>
              </div>
              <p>{post.body}</p>
              <Link
                href={`/post/${post.id}`}
                type="button"
                className="self-end border border-light rounded-md px-3 bg-light text-slate-50 font-bold"
              >
                Lire
              </Link>
            </article>
          ))}
      </section>
    </main>
  )
}
