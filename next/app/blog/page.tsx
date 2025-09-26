import { getPostLinks } from "./posts";
import Link from "next/link";

export default function BlogIndex() {
  const postLinks = getPostLinks();
  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: 16,
        textAlign: "center",
      }}
    >
      <h1>Blog posts</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {postLinks.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.title} ({post.date})
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
