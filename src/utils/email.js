/* ═══════════════════════════════════════════════════════
   EMAIL OBFUSCATION — ROT13
   Emails are stored ROT13-encoded. They are decoded at
   runtime only when the user clicks, preventing scraping.
═══════════════════════════════════════════════════════ */

function rot13(str) {
  return str.replace(/[a-zA-Z]/g, (c) => {
    const base = c <= "Z" ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
  });
}

// ROT13 of "pi@hanneuroendo.org"
const DR_HAN_ENCODED = "cv@unaarhebraqb.bet";

export function mailtoHan() {
  return `mailto:${rot13(DR_HAN_ENCODED)}`;
}

export function drHanEmail() {
  return rot13(DR_HAN_ENCODED);
}
