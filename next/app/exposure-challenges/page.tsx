"use client";

import { useState } from "react";
import Link from "next/link";
import exposureChallenges from "../data/exposureChallenges.json";

export default function ExposureChallenges() {
  const [inputValue, setInputValue] = useState("");
  const [randomizedNumber, setRandomizedNumber] = useState<number | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setRandomizedNumber(null);

    const num = parseInt(inputValue);

    // Validate input
    if (isNaN(num) || num < 1 || num > 100) {
      setError("Please enter a number between 1 and 100");
      return;
    }

    // Calculate the range
    let min = num - 5;
    let max = num + 3;

    // Adjust for edge cases
    if (num < 5) {
      min = 1;
    }
    if (num > 97) {
      max = 100;
    }

    // Ensure min doesn't go below 1 and max doesn't go above 100
    min = Math.max(1, min);
    max = Math.min(100, max);

    // Generate random number in the range [min, max]
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomizedNumber(randomNum);
  };

  return (
    <main
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: 32,
      }}
    >
      {/* Input Section */}
      <div
        style={{
          padding: 32,
          borderRadius: 12,
          marginBottom: 48,
        }}
      >
        <h2
          style={{
            fontSize: 24,
            marginBottom: 16,
            color: "#333",
          }}
        >
          Exposure challenge
        </h2>
        <p
          style={{
            fontSize: 18,
            marginBottom: 48,
            color: "#666",
            maxWidth: 700,
            margin: "0 auto 48px",
            lineHeight: 1.6,
          }}
        >
          Below are 100 social challenges. It starts easy and gets progressively
          harder. Everybody has a limit, i.e. the edge of their comfort zone.
          Read the challenges and note the number of the challenge that is the
          closest to your limit. Enter that number here to get a suitable random
          challenge to improve your limit.
        </p>
        <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <input
                type="number"
                min="1"
                max="100"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a number (1-100)"
                style={{
                  width: "100%",
                  padding: 16,
                  fontSize: 16,
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: "16px 24px",
                fontSize: 16,
                cursor: "pointer",
                backgroundColor: "#667eea",
                color: "white",
                border: "none",
              }}
            >
              Submit
            </button>
          </div>
        </form>

        {error && (
          <p
            style={{
              color: "#e74c3c",
              fontSize: 14,
              marginTop: 8,
            }}
          >
            {error}
          </p>
        )}

        {randomizedNumber && (
          <div
            style={{
              marginTop: 24,
              padding: 24,
              backgroundColor: "#fff",
              borderRadius: 8,
              border: "2px solid #667eea",
              animation: "slideIn 0.4s ease",
            }}
          >
            <h3
              style={{
                fontSize: 20,
                marginBottom: 12,
                color: "#667eea",
              }}
            >
              Your Challenge (#{randomizedNumber}):
            </h3>
            <p
              style={{
                fontSize: 18,
                color: "#333",
                lineHeight: 1.6,
              }}
            >
              {exposureChallenges[randomizedNumber - 1]}
            </p>
          </div>
        )}
      </div>

      {/* Full List of Challenges */}
      <div>
        <ol
          style={{
            lineHeight: 2,
            fontSize: 16,
            color: "#444",
            paddingLeft: 24,
          }}
        >
          {exposureChallenges.map((challenge, index) => (
            <li
              key={index}
              style={{
                marginBottom: 8,
                paddingLeft: 8,
              }}
            >
              {challenge}
            </li>
          ))}
        </ol>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
