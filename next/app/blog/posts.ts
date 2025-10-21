export type BlogPost = { title: string; date: string; content: string[] };

export const posts: Record<string, BlogPost> = {
  simplcity: {
    title: "Simplicity",
    date: "2025-10-21",
    content: [
      "Things just are. Accept.",
      "Don't be a philosopher. Don't make things more complicated than they need to be. Just be.",
    ],
  },
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
      "",
      "Now let’s change the topic a little bit, but still on the same theme.",
      "Maybe you don’t know what kind of stories you want to create.",
      "Action produces information.",
      "Sometimes you don’t know what you like, or what you want to do, that is fine, it happens.",
      "My best advice is that you do something that is slightly uncomfortable. It is something that you know you can do and where you know you will be fine doing. If it is too uncomfortable, don't do it. And don't beat yourself up over not doing it, you will get there. The reason it is uncomfortable is probably that your brain isn’t sure what negative reaction/outcome the action might produce. Only way to find out is to collect more data by doing it, you can’t simulate the data, it needs to be done.",
      "Because the outcome is uncertain, this can be a great way to create a foundation for a potentially great story. And you will find out if it is the kind of story that you want to create or not. Because again.",
      "Action produces information.",
      "When you are uncertain of what to do, just do something, anything. Because then, at least you will know.",
      "",
      "Now let's change the topic again, but still stay on the same line.",
      "I love coincidences.",
      "Coincidences feel like things that break some pattern, they are unpredictable and unexpected in a way that adds spice to life.",
      "People who do things that they feel are uncomfortable also challenge the status quo of things, i.e. the pattern. Since I have noticed that doing things outside the comfort zone correlate with coincidences happening to you.",
      "I would argue that a good story cannot happen without this breaking of pattern.",
      "This means that challenging your comfort zone is intimately linked to creating a good story which is intimately linked with meaning (to me).",
      "I love coincidences.",
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
