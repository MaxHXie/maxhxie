export type BlogPost = { title: string; date: string; content: string[] };

export const posts: Record<string, BlogPost> = {
  stories: {
    title: "Stories",
    date: "2025-10-21",
    content: [
      "There are few things that all humans agree to, but if I had to pick one, it would be human's universal love of a good story. People die and cities disappear but stories can survive for millenia. In all stories the main character(s) is challenged and through the challenge realizes something within themselves, just like in real life. My thesis is that a secondary effect of my meaning of life itself is to create good stories with your own life as the medium.",
      "How a good story is defined is subjective and only you can answer for yourself. There are several common themes of narratives such as:",
      "1. The underdog story (achieving success when conventionally, you shouldn't, my personal favourite)",
      "2. Revenge story",
      "3. Acceptance story (the path to accepting a situation or a person)",
      "The type of stories that you choose to create doesn't matter as long as they are right for you, as they become a source of meaning. At the end of the day, life canbe simple this way. Think hard what kind of stories you want to create, what you enjoy to create, and go create some.",
    ],
  },
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
