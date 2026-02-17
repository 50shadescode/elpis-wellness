export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-ink mb-8">Article: {params.slug}</h1>
        <div className="prose prose-blue max-w-none">
          {/* Content from Headless CMS will render here */}
        </div>
      </div>
    </main>
  );
}