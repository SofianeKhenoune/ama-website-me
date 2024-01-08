"use client"
import gsap from "gsap"

import { useEffect, useState } from "react"
import Loading from "../loading"
import Post, { PostType } from "../ui/post"

export default function News() {
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    async function getPosts() {
      const posts = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      )
      const data = await posts.json()
      setPosts(data)
    }
    getPosts()
  }, [])

  useEffect(() => {
    const tl = gsap.timeline()
    const blocs = gsap.utils.toArray(".bloc")

    blocs.forEach((element: any) => {
      tl.to(element, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "back.inOut",
      })
    })
  })

  return posts.length ? (
    <main className="min-h-screen flex flex-col overflow-hidden">
      <h1 className="text-title1 font-bold text-center py-2 px-7 bg-light rounded-bl-full rounded-br-full">
        Actualités
      </h1>
      <section className="flex flex-col p-10 gap-5">
        {posts.length &&
          posts.map((post: PostType, index: number) => (
            <div key={post.id} className="flex flex-col">
              <Post post={post} index={index} />
            </div>
          ))}
      </section>
    </main>
  ) : (
    <Loading />
  )
}
