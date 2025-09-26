export type BlogPost = { title: string; date: string; content: string[] };

export const posts: Record<string, BlogPost> = {
  "hello-world": {
    title: "Hello World",
    date: "2025-09-26",
    content: [
      "This is a placeholder post. Replace this content with your writing.",
      "You can add multiple paragraphs by extending the content array.",
    ],
  },
};

export type PostLink = { slug: string; title: string; date: string };

export function getPostLinks(): PostLink[] {
  return Object.entries(posts).map(([slug, post]) => ({
    slug,
    title: post.title,
    date: post.date,
  }));
}
