import Link from "next/link";

export function Lp() {
  return (
    <div className="hero flex-1">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold leading-tight">Play bookmark list ✨</h1>
          <p className="py-6">You can create bookmark lists for your work or hobbies. And, you can share those lists with the world or explore someone else's bookmark lists from around the world.</p>
          <Link className="btn btn-primary" href="/home">
            login with twitter
          </Link>
        </div>
      </div>
    </div>
  )
}
