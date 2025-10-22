"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Home() {
  const [question, setQuestion] = useState("");
  const [conversationHistory, setConversationHistory] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const previousHistoryLength = useRef(0);

  // Load conversation history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem("conversationHistory");
    if (savedHistory) {
      try {
        const parsed = JSON.parse(savedHistory);
        setConversationHistory(parsed);
        // Set the initial length so loaded messages don't animate
        previousHistoryLength.current = parsed.length;
      } catch (error) {
        console.error("Error loading conversation history:", error);
      }
    }
  }, []);

  // Save conversation history to localStorage whenever it changes
  useEffect(() => {
    if (conversationHistory.length > 0) {
      localStorage.setItem(
        "conversationHistory",
        JSON.stringify(conversationHistory)
      );
    }
    // Update the previous history length after a short delay to allow animation to play
    const timer = setTimeout(() => {
      previousHistoryLength.current = conversationHistory.length;
    }, 500);
    return () => clearTimeout(timer);
  }, [conversationHistory]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);

    // Add the new user question to the conversation history
    const newUserMessage: Message = { role: "user", content: question };
    const updatedHistory = [...conversationHistory, newUserMessage];
    setConversationHistory(updatedHistory);

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: updatedHistory }),
      });

      const data = await response.json();

      // Add the assistant's answer to the conversation history
      const newAssistantMessage: Message = {
        role: "assistant",
        content: data.answer,
      };
      setConversationHistory([...updatedHistory, newAssistantMessage]);
      setQuestion("");
    } catch (error) {
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, something went wrong. Please try again.",
      };
      setConversationHistory([...updatedHistory, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearHistory = () => {
    setConversationHistory([]);
    localStorage.removeItem("conversationHistory");
    previousHistoryLength.current = 0;
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
        My name is Max Henry Xie.
        <br />
        <Link href="/blog">Click here to go to my blog posts</Link>
        <br />
        <Link href="/sunday-quest">Click here for a Sunday Quest</Link>
        <br />
        <Link href="/exposure-challenges">
          Click here for Exposure Challenges
        </Link>
      </section>

      <section style={{ textAlign: "left" }}>
        {conversationHistory.length > 0 ? (
          <button
            onClick={clearHistory}
            disabled={isLoading}
            style={{
              padding: "8px 16px",
              fontSize: 14,
              cursor: isLoading ? "not-allowed" : "pointer",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              opacity: isLoading ? 0.6 : 1,
              marginBottom: 8,
            }}
          >
            Clear conversation history
          </button>
        ) : (
          <p>
            Get to know me through my digital clone. Ask me any question, it is
            completely anonymous.
          </p>
        )}
        <form onSubmit={handleSubmit} style={{ margin: 0 }}>
          <div
            style={{ position: "relative", marginBottom: 12, width: "100%" }}
          >
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={
                isLoading
                  ? "Thinking..."
                  : "Ask my digital clone anything anonymously here..."
              }
              disabled={isLoading}
              style={{
                width: "100%",
                padding: 16,
                paddingRight: isLoading ? 48 : 16,
                fontSize: 16,
                outline: "none",
                opacity: isLoading ? 0.6 : 1,
                cursor: isLoading ? "not-allowed" : "text",
                transition: "opacity 0.3s ease, padding-right 0.3s ease",
                boxSizing: "border-box",
              }}
            />
            {isLoading && (
              <div
                style={{
                  position: "absolute",
                  right: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 16,
                  height: 16,
                  border: "2px solid #ddd",
                  borderTopColor: "#000000",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              />
            )}
            <style jsx>{`
              @keyframes spin {
                to {
                  transform: translateY(-50%) rotate(360deg);
                }
              }
            `}</style>
          </div>
        </form>
        {/* Display conversation history */}
        {conversationHistory.length > 0 && (
          <div style={{ marginBottom: 24 }}>
            {[...conversationHistory].reverse().map((message, index) => {
              const originalIndex = conversationHistory.length - 1 - index;
              const isNewMessage =
                originalIndex >= previousHistoryLength.current;

              return (
                <div
                  key={originalIndex}
                  className={isNewMessage ? "message-animate" : ""}
                  style={{
                    padding: 16,
                    backgroundColor:
                      message.role === "user" ? "#f5f5f5" : "#e3f2fd",
                    marginBottom: 12,
                    lineHeight: 1.6,
                  }}
                >
                  <strong>{message.role === "user" ? "You: " : "Max: "}</strong>
                  <span style={{ whiteSpace: "pre-wrap" }}>
                    {message.content}
                  </span>
                </div>
              );
            })}
            <style jsx>{`
              @keyframes slideInFadeIn {
                from {
                  opacity: 0;
                  transform: translateY(-20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              .message-animate {
                animation: slideInFadeIn 0.4s ease-out;
              }
            `}</style>
          </div>
        )}
      </section>
    </main>
  );
}
