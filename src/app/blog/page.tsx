import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { Navigation } from "@/components/Navigation";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Blog — Fleximo Finance",
  description: "Einblicke zu Finanzstrategie, CFO-Themen und KI im Finanzbereich.",
};

export default function BlogIndex() {
  const posts = getPosts();
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-void pt-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="mb-16">
            <span className="text-xs font-mono text-neon uppercase tracking-widest block mb-4">
              Blog
            </span>
            <h1 className="text-display-sm font-space text-snow mb-4">
              Einblicke & Perspektiven
            </h1>
            <p className="text-mist font-inter text-lg leading-relaxed max-w-xl">
              CFO-Wissen für Gründer, Operator und Entscheidungsträger — direkt
              und ohne Fachsprachen-Theater.
            </p>
          </div>

          {/* Posts */}
          {posts.length === 0 ? (
            <div className="py-16 text-center border border-wire/50 rounded-2xl bg-card">
              <p className="text-4xl mb-4">📊</p>
              <p className="font-space font-600 text-snow text-lg mb-2">Neue Beiträge folgen bald</p>
              <p className="font-inter text-mist text-sm">
                Wir veröffentlichen regelmäßig Einblicke zu Finanzthemen.
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group block bg-card border border-wire rounded-2xl p-7 hover:border-neon/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    {p.date && (
                      <p className="text-xs font-mono text-mist/50 uppercase tracking-widest mb-3">
                        {p.date}
                      </p>
                    )}
                    <h2 className="text-xl font-space font-700 text-snow mb-2 group-hover:text-neon transition-colors duration-200">
                      {p.title}
                    </h2>
                    {p.description && (
                      <p className="text-sm font-inter text-mist leading-relaxed mb-4">
                        {p.description}
                      </p>
                    )}
                    <span className="text-xs font-mono text-neon/60 group-hover:text-neon transition-colors duration-200">
                      Weiterlesen →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-16">
            <Link
              href="/"
              className="text-sm font-inter text-mist/60 hover:text-mist transition-colors duration-200"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
