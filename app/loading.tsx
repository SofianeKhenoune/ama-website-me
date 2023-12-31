import "@/app/style/Loader.Module.css"

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <main className="min-h-screen flex flex-col overflow-hidden justify-center items-center">
      <div className="loader">
        <div className="loader-rotation"></div>
        <div className="loader-image"></div>
      </div>
    </main>
  )
}
