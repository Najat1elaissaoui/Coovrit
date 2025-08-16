"use client"

import { useState, useEffect } from "react"

export default function CoovritLanding() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  const slideContent = [
    {
      badge: "Test",
      title: "Test Title",
      subtitle: "Test Subtitle",
      description: "Test Description",
      cta: "Test CTA"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <h1>Test</h1>
    </div>
  );
}
