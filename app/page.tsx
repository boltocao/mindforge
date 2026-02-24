import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[#0a0f1d] text-zinc-100">
      <section className="mx-auto max-w-5xl px-6 py-14">
        <p className="text-cyan-400 font-semibold">MindForge</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Blog Tech estilo WordPress</h1>
        <p className="mt-3 max-w-2xl text-zinc-300">Notícias, tutoriais e experimentos de IA, automação e segurança.</p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5">
              <p className="text-xs text-cyan-400">{post.category}</p>
              <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
              <p className="mt-3 text-sm text-zinc-300">{post.excerpt}</p>
              <p className="mt-4 text-xs text-zinc-500">{post.date} • {post.author}</p>
              <Link href={`/post/${post.slug}`} className="mt-4 inline-block text-sm text-cyan-300 hover:text-cyan-200">Ler artigo →</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
