import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/posts';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-[#0a0f1d] text-zinc-100">
      <article className="prose prose-invert mx-auto max-w-3xl px-6 py-14">
        <Link
          href="/"
          className="mb-6 inline-flex items-center rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-200 no-underline hover:border-cyan-400 hover:text-cyan-300"
        >
          ← Voltar para Home
        </Link>
        <p className="text-cyan-400">{post.category}</p>
        <h1>{post.title}</h1>
        <p className="text-sm text-zinc-400">{post.date} • {post.author}</p>
        <pre className="whitespace-pre-wrap rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-zinc-200">{post.content}</pre>
      </article>
    </main>
  );
}
