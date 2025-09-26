import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: 16,
        textAlign: "center",
      }}
    >
      <img src="/profile.jpeg" alt="Max Henry Xie" width={200} height={200} />
      <nav>
        <a href="/blog">Blog articles</a>
      </nav>
      <section aria-label="About and work">
        My name is Max Henry Xie. And this is my website.
        {/* Add your paragraphs, images, and image descriptions below */}
      </section>
    </main>
  );
}
