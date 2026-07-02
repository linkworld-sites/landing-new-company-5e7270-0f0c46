import Link from "next/link";
import { notFound } from "next/navigation";
import { getLegalPage, getLegalSlugs } from "@/lib/legal";
import { Navigation } from "@/components/Navigation";
import { SiteFooter } from "@/components/SiteFooter";

export function generateStaticParams() {
  return getLegalSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) notFound();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-void pt-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-inter text-mist/60 hover:text-mist transition-colors duration-200 mb-12"
          >
            ← Zurück zur Startseite
          </Link>
          <article
            className="post-body"
            dangerouslySetInnerHTML={{ __html: page.html }}
          />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
