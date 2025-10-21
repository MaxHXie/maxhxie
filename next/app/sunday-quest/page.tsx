"use client";

import { useState } from "react";
import Link from "next/link";
import sundayQuests from "../data/sundayQuests.json";

type Quest = {
  title: string;
  category: string;
};

export default function SundayQuest() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);
  const [showQuest, setShowQuest] = useState(false);
  const [hideWheel, setHideWheel] = useState(false);

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setShowQuest(false);
    setSelectedQuest(null);
    setHideWheel(false);

    // Simulate wheel spinning for 3 seconds
    setTimeout(() => {
      // Select a random quest
      const randomIndex = Math.floor(Math.random() * sundayQuests.length);
      setSelectedQuest(sundayQuests[randomIndex]);
      setIsSpinning(false);

      // Hide wheel with animation
      setHideWheel(true);

      // Show quest with animation after wheel fade out
      setTimeout(() => {
        setShowQuest(true);
      }, 500);
    }, 3000);
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      practical: "#4CAF50",
      reflective: "#9C27B0",
      social: "#FF9800",
      creative: "#E91E63",
      physical: "#2196F3",
      mental: "#00BCD4",
    };
    return colors[category] || "#607D8B";
  };

  return (
    <main
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: 32,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: 48,
          marginBottom: 16,
          fontWeight: "bold",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        The Sunday Quest
      </h1>

      <p
        style={{
          fontSize: 18,
          marginBottom: 48,
          color: "#666",
          maxWidth: 600,
        }}
      >
        The Sunday Quest is a random quest to complete, typically on Sundays. It
        is supposed to be a fun way to improve a random skill you haven&apos;t
        done in a while and shouldn&apos;t take too much time and effort.
      </p>

      {/* Container for wheel and quest card */}
      <div
        style={{
          position: "relative",
          marginBottom: 48,
          minHeight: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {/* Spinning Wheel */}
        {!showQuest && (
          <div
            className={hideWheel ? "wheel-hide" : ""}
            style={{
              position: "relative",
              opacity: hideWheel ? 0 : 1,
              transform: hideWheel ? "scale(0.8)" : "scale(1)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            <div
              className={isSpinning ? "wheel-spinning" : ""}
              style={{
                width: 300,
                height: 300,
                borderRadius: "50%",
                background: `conic-gradient(
                  from 0deg,
                  #FF6B6B 0deg 60deg,
                  #4ECDC4 60deg 120deg,
                  #45B7D1 120deg 180deg,
                  #FFA07A 180deg 240deg,
                  #98D8C8 240deg 300deg,
                  #F7DC6F 300deg 360deg
                )`,
                boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                border: "12px solid #fff",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Center circle */}
              <div
                style={{
                  width: 160,
                  height: 160,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 80,
                }}
              >
                ✨
              </div>
            </div>

            {/* Pointer */}
            <div
              style={{
                position: "absolute",
                top: -20,
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "20px solid transparent",
                borderRight: "20px solid transparent",
                borderTop: "30px solid #333",
              }}
            />
          </div>
        )}

        {/* Quest Display */}
        {selectedQuest && showQuest && (
          <div
            className="quest-appear"
            style={{
              padding: 32,
              backgroundColor: "#fff",
              borderRadius: 16,
              boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
              maxWidth: 600,
              width: "100%",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "8px 20px",
                borderRadius: 20,
                backgroundColor: getCategoryColor(selectedQuest.category),
                color: "white",
                fontSize: 14,
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              {selectedQuest.category}
            </div>

            <h2
              style={{
                fontSize: 28,
                lineHeight: 1.5,
                color: "#333",
                marginBottom: 32,
              }}
            >
              {selectedQuest.title}
            </h2>
          </div>
        )}
      </div>

      {/* Button */}
      {!isSpinning && !selectedQuest && (
        <button
          onClick={handleSpin}
          style={{
            padding: "20px 48px",
            fontSize: 24,
            fontWeight: "bold",
            backgroundColor: "#667eea",
            color: "white",
            border: "none",
            borderRadius: 50,
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(102, 126, 234, 0.4)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 8px 25px rgba(102, 126, 234, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              "0 6px 20px rgba(102, 126, 234, 0.4)";
          }}
        >
          Spin the wheel!
        </button>
      )}

      {isSpinning && (
        <p
          style={{
            fontSize: 20,
            color: "#667eea",
            fontWeight: "bold",
          }}
        >
          Spin spin spin...!
        </p>
      )}

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(1440deg); /* 4 full rotations */
          }
        }

        .wheel-spinning {
          animation: spin 3s cubic-bezier(0.17, 0.67, 0.12, 0.99);
        }

        @keyframes wheelHide {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.8);
          }
        }

        .wheel-hide {
          animation: wheelHide 0.5s ease forwards;
        }

        @keyframes questAppear {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .quest-appear {
          animation: questAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </main>
  );
}
