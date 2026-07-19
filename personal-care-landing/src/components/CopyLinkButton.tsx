"use client";

import { useState } from "react";

export default function CopyLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — the link is still visible to copy manually
    }
  }

  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
      <input
        readOnly
        value={url}
        onFocus={(e) => e.currentTarget.select()}
        style={{
          flex: "1 1 260px",
          padding: "11px 13px",
          border: "2px solid rgba(28,74,87,.16)",
          borderRadius: 10,
          fontFamily: "inherit",
          fontSize: "0.95rem",
          color: "var(--ink)",
          background: "#fff",
        }}
      />
      <button type="button" className="pbtn pbtn-wire" onClick={copy}>
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}
