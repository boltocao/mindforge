import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <main className="min-h-screen bg-[#0f172a] text-zinc-100">
      <header className="sticky top-0 z-20 border-b border-zinc-800/80 bg-[#111827]/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-cyan-500 font-black text-black">M</span>
            <span className="font-bold">MindForge</span>
          </div>
          <nav className="hidden gap-5 text-sm text-zinc-300 md:flex">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">Latest</a>
            <a href="#" className="hover:text-white">About</a>
          </nav>
          <a href="/admin" className="rounded-md bg-cyan-500 px-3 py-1.5 text-sm font-semibold text-black hover:bg-cyan-400">Admin</a>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 py-6 lg:grid-cols-[240px_1fr_280px]">
        <aside className="hidden lg:block">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
            <p className="mb-3 text-sm font-semibold text-zinc-200">Navegação</p>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><a className="hover:text-white" href="#">🏠 Home</a></li>
              <li><a className="hover:text-white" href="#">📰 Posts</a></li>
              <li><a className="hover:text-white" href="#">🏷️ Tags</a></li>
              <li><a className="hover:text-white" href="#">ℹ️ Sobre</a></li>
            </ul>
          </div>
        </aside>

        <section className="space-y-4">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
            <h1 className="text-2xl font-bold tracking-tight">Feed de conteúdo tech</h1>
            <p className="mt-1 text-sm text-zinc-400">Inspirado no visual de comunidade dev: cards limpos, leitura rápida e foco no conteúdo.</p>
          </div>

          {posts.map((post) => (
            <article key={post.slug} className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5 transition hover:border-zinc-600">
              <div className="mb-2 flex items-center gap-2 text-xs text-zinc-400">
                <span className="rounded bg-zinc-800 px-2 py-1">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h2 className="text-2xl font-bold leading-tight text-zinc-100">
                <Link href={`/post/${post.slug}`} className="hover:text-cyan-300">{post.title}</Link>
              </h2>
              <p className="mt-2 text-zinc-300">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-zinc-400">
                <span>Por {post.author}</span>
                <Link href={`/post/${post.slug}`} className="font-medium text-cyan-300 hover:text-cyan-200">Ler mais →</Link>
              </div>
            </article>
          ))}
        </section>

        <aside className="space-y-4">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
            <h3 className="text-sm font-semibold">Sobre o MindForge</h3>
            <p className="mt-2 text-sm text-zinc-400">Portal para IA, automação, segurança e produtividade prática.</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
            <h3 className="text-sm font-semibold">Categorias</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {categories.map((category) => (
                <span key={category} className="rounded-full border border-zinc-700 px-2.5 py-1 text-xs text-zinc-300">#{category}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
