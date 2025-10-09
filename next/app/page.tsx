"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer("");

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      setAnswer(data.answer);
      setQuestion("");
    } catch (error) {
      setAnswer("Sorry, something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
      <section aria-label="About and work" style={{ marginBottom: 48 }}>
        My name is Max Henry Xie.{" "}
        <Link href="/blog">Click here to go to my blog articles</Link>
        {/* Add your paragraphs, images, and image descriptions below */}
      </section>

      <section style={{ textAlign: "left" }}>
        <p style={{ marginBottom: 24 }}>
          You can chat with my digital clone, ask me anything and my digital
          clone will try to respond as if we were chatting in person. Your
          questions are anonymous, I won&apos;t be able to know, in any way, who
          asked them. Disclaimer: all replies are written automatically by my
          digital clone, not me. There may be deviations from my actual
          personality.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything about me"
            disabled={isLoading}
            style={{
              width: "100%",
              padding: 16,
              fontSize: 16,
              marginBottom: 16,
              outline: "none",
            }}
          />
        </form>

        {isLoading && (
          <div
            style={{
              padding: 24,
              backgroundColor: "#f5f5f5",
              borderRadius: 8,
              textAlign: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                border: "4px solid #ddd",
                borderTopColor: "#000000",
                borderRadius: "50%",
                margin: "0 auto",
                animation: "spin 1s linear infinite",
              }}
            />
            <style jsx>{`
              @keyframes spin {
                to {
                  transform: rotate(360deg);
                }
              }
            `}</style>
          </div>
        )}

        {answer && !isLoading && (
          <div
            style={{
              padding: 24,
              backgroundColor: "#f5f5f5",
              borderRadius: 8,
              lineHeight: 1.6,
              width: "100%",
            }}
          >
            <p style={{ whiteSpace: "pre-wrap" }}>{answer}</p>
          </div>
        )}
      </section>
    </main>
  );
}
