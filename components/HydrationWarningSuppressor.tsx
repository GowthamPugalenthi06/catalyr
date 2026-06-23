"use client";

if (typeof window !== "undefined") {
  const originalError = console.error;
  console.error = (...args: any[]) => {
    // Specifically ignore hydration mismatches caused by bis_skin_checked
    // This attribute is injected by extensions like Avira Browser Safety or Buster
    const msg = args.join(" ");
    if (msg.includes("bis_skin_checked") || msg.includes("bis_")) {
      return;
    }
    // Suppress legacy WordPress API fetch errors triggering 404 overlays
    if (msg.includes("state error:") && msg.includes("<!DOCTYPE html>")) {
      return;
    }
    originalError.apply(console, args);
  };
}

export function HydrationWarningSuppressor() {
  return null;
}
