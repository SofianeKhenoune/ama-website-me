export default function Post({
  params,
}: {
  params: { id: string }
}): JSX.Element {
  const { id } = params
  return (
    <main className="min-h-screen flex flex-col overflow-hidden">
      <h1 className="text-title1 font-bold text-center py-2 px-7 self-end bg-light rounded-bl-xl">
        Post {id}
      </h1>
    </main>
  )
}
