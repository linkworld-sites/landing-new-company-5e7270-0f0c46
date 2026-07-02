import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/posts";
import { Navigation } from "@/components/Navigation";
import { SiteFooter } from "@/components/SiteFooter";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Summit CFO Services Blog`,
    description: post.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-void pt-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-inter text-mist/60 hover:text-mist transition-colors duration-200 mb-12"
          >
            ← Alle Beiträge
          </Link>

          {/* Post header */}
          <header className="mb-12">
            {post.date && (
              <p className="text-xs font-mono text-mist/50 uppercase tracking-widest mb-4">
                {post.date}
              </p>
            )}
            <h1 className="text-display-sm font-space text-snow leading-tight mb-6">
              {post.title}
            </h1>
            {post.description && (
              <p className="text-lg font-inter text-mist leading-relaxed border-l-2 border-neon pl-5">
                {post.description}
              </p>
            )}
          </header>

          {/* Divider */}
          <div className="h-px bg-wire mb-12" />

          {/* Content */}
          <article
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-wire">
            <p className="text-sm font-mono text-mist/50 uppercase tracking-widest mb-4">
              Bereit für den nächsten Schritt?
            </p>
            <h2 className="text-xl font-space font-700 text-snow mb-4">
              Summit CFO Services — Ihr CFO. On Demand.
            </h2>
            <Link
              href="/contact"
              className="btn-teal rounded-sm inline-flex text-xs"
            >
              <span>Kostenloses Erstgespräch →</span>
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
