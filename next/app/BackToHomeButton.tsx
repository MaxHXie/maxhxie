"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BackToHomeButton() {
  const pathname = usePathname();

  // Don't show the button if we're already on the home page
  if (pathname === "/") {
    return null;
  }

  return (
    <Link
      href="/"
      style={{
        position: "absolute",
        top: 24,
        left: 24,
        fontSize: 16,
        textDecoration: "none",
        color: "#333",
      }}
    >
      ← Back to Home
    </Link>
  );
}
