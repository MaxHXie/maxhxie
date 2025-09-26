import { posts } from "../posts";

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    return (
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: 16,
          textAlign: "center",
        }}
      >
        <h1>Post not found</h1>
        <p>
          <a href="/blog">Back to blog</a>
        </p>
      </main>
    );
  }

  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: 16,
        textAlign: "center",
      }}
    >
      <h1>{post.title}</h1>
      <div>{post.date}</div>
      {post.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <p>
        <a href="/blog">Back to blog</a>
      </p>
    </main>
  );
}
