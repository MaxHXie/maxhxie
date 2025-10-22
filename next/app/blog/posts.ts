export type BlogPost = { title: string; date: string; content: string[] };

export const posts: Record<string, BlogPost> = {
  "the-art-of-doing-a-thing": {
    title: "The art of doing a thing",
    date: "2025-10-22",
    content: [
      "To do a thing, you need 3 things.",
      "1. Wanting to do it.",
      "2. Allowing yourself to do it, based on your bravery and ethics.",
      "3. Knowing it is a thing that can be done.",
      "Wanting to do something is mostly innate. So is having the ethics to allow yourself to do something. To do more of the things we want to do, the easiest way is to either work on our bravery or find out what things can be done. This post will focus on bravery.",
      "We will start with bravery. No human has infinite bravery, because infinite bravery is not feasible. When we do things we aren't brave enough to do we feel anxiety. Anxiety is your body's way to try to stop you from doing that thing, to keep you alive, and it is mostly right. But in modern society, in the absence of real threats, we learn to develop anxieties for things that just aren't that dangerous.",
      "There are different domains of anxiety, for example:",
      "1. Social anxiety",
      "2. Performance anxiety",
      "3. Specific phobias",
      "Each anxiety domain is its own thing and is separate from other domains, and needs each to be solved one by one. Each anxiety domain is like a skill tree that starts with things that are easy and automatic to us and gets harder as the skill tree progresses. A good idea is to understand where your limit is, i.e. the edge of your comfort zone is, in each of the relevant anxiety domains to understand what you can do to improve your limit.",
      "Taking on challenges that are not accessible yet in the skill tree is brave, but not necessary and generally is something that I would refrain from doing. Why? The reason is because it could be too much to take on in one go and it could backfire. It is much better to do the things that are right on the edge of your comfort zone, i.e. things that you know that you can do, but are noe overly anxious to do. Therefore, I argue a disciplined routine of doing tasks that constantly makes you a little bit anxious is the best way to progress.",
      "Each person's skill tree is roughly similar but at the same time, different and individually specific. Something that is very easy for one person may be very difficult for someone else. For those individual obstacles where self-perception is the issue, reflection is needed to get past them. Some examples could be:",
      "1. Don't want to be a burden",
      "2. Don't want to be seen as dumb (insecurity about intelligence)",
      "3. Sensitivity to public perception",
      "You should be able to detect if you have such an individual obstacle quite fast by noticing what things are harder for you to do than the norm. If your individual obstacle of sensitivity to public perception is especially high you should question yourself why that may be the case, and try to derive to a point of what a more balanced sensitivity could look like. Once that obstacle is processed you can progress further.",
    ],
  },
  simplicity: {
    title: "Simplicity",
    date: "2025-10-21",
    content: [
      "Don't be a philosopher. Don't make things more complicated than they need to be.",
      "Just be.",
      "Things just are.",
      "Accept.",
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
