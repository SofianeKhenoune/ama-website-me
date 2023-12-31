import Link from "next/link"
import { RxAvatar } from "react-icons/rx"
import { users } from "../data/users"

export type PostType = {
  userId: number
  id: number
  title: string
  body: string
}
export default function Post({
  post,
  index,
}: {
  post: PostType
  index: number
}) {
  return (
    <Link
      className={`bloc p-3 flex flex-col rounded-lg bg-dark text-slate-50 shadow-['rgba(0,0,0,0.2)_0px_0px_16px'] w-[80%] border border-medium hover:bg-medium transition duration-500 opacity-0 ${
        index % 2 === 0
          ? "self-baseline -translate-x-full"
          : "self-end translate-x-full"
      }`}
      href={`/news/post/${post.id}`}
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
      <p className="text-justify">{post.body}</p>
      <button
        type="button"
        className="self-end border border-light rounded-md px-3 bg-medium text-slate-50 font-bold hover:bg-dark"
      >
        Lire
      </button>
    </Link>
  )
}
