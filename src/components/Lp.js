import Link from "next/link";

export function Lp() {
  return (
    <div className="hero flex-1">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold leading-tight tracking-wider">URL List for <span className="text-primary">X</span></h1>
          <p className="py-6">You can create URL lists for your hobbies or business. And, you can share those lists with the world or explore someone else's lists from around the world.</p>
          <Link className="btn btn-primary" href="/home">
            login with twitter
          </Link>
          <Link className="btn btn-primary" href="/test">
            test
          </Link>

        </div>
      </div>
    </div>
  )
}
