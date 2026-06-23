import { useState } from "react";

// Copies text to the clipboard and flips `copied` to true for `resetMs`,
// so callers can show transient "copied" feedback.
export const useCopied = (resetMs = 2000) => {
  const [copied, setCopied] = useState(false);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), resetMs);
  };

  return { copied, copy };
};
