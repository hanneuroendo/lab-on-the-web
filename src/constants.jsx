/* ═══════════════════════════════════════════════════════
   HAN LAB — SHARED CONSTANTS & DATA
═══════════════════════════════════════════════════════ */

/* ── Tokens ── */
export const T = {
  navy: "#2f4858",
  navyDark: "#1e3040",
  navyDeep: "#131f28",
  teal: "#3d8fa6",
  tealLight: "#5aabbe",
  tealPale: "#e8f4f8",
  gold: "#c9963c",
  goldLight: "#e8b86d",
  slate: "#4a5e6d",
  slateLight: "#8fa3b1",
  slatePale: "#d4dde3",
  offWhite: "#f4f6f8",
  white: "#ffffff",
};

/* ── Typography ── */
export const F = {
  serif: "'Cormorant Garamond', serif",
  sans: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

export const CONTAINER_MAX_WIDTH = 1160;

/* ── Pages ── */
export const PAGES = [
  "home",
  "research",
  "publications",
  "team",
  "join",
  "news",
];

/* ── Icons ── */
export const Ico = {
  circuit: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke={T.teal}
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <circle cx="4" cy="11" r="2" />
      <circle cx="18" cy="5" r="1.8" />
      <circle cx="18" cy="17" r="1.8" />
      <circle cx="11" cy="3" r="1.3" />
      <circle cx="11" cy="19" r="1.3" />
      <line x1="6" y1="10" x2="16.2" y2="5.8" />
      <line x1="6" y1="12" x2="16.2" y2="16.2" />
      <line x1="5.5" y1="9.5" x2="9.8" y2="4.2" />
      <line x1="5.5" y1="12.5" x2="9.8" y2="17.8" />
    </svg>
  ),
  repro: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke={T.teal}
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <circle cx="11" cy="8.5" r="4.5" />
      <path d="M11 13 C11 16.5 8.5 19 8.5 22" />
      <path d="M11 13 C11 16.5 13.5 19 13.5 22" />
      <line x1="7.5" y1="18" x2="14.5" y2="18" />
      <circle
        cx="11"
        cy="8.5"
        r="1.5"
        fill={T.teal}
        fillOpacity="0.2"
        stroke="none"
      />
    </svg>
  ),
  homeo: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke={T.teal}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="5.5" width="18" height="11" rx="2.5" />
      <polyline
        points="2,11 5.5,7.5 9,14 12.5,6.5 16,14.5 19.5,11"
        strokeWidth="1.6"
      />
    </svg>
  ),
  mail: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <rect x="1" y="2.5" width="14" height="11" rx="1.5" />
      <path d="M1 5l7 5 7-5" />
    </svg>
  ),
  pin: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    >
      <path d="M7 13s-5-4.5-5-8a5 5 0 0110 0c0 3.5-5 8-5 8z" />
      <circle cx="7" cy="5.5" r="1.5" />
    </svg>
  ),
  search: (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <circle cx="6.5" cy="6.5" r="5" />
      <line x1="10.5" y1="10.5" x2="14" y2="14" />
    </svg>
  ),
  extLink: (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    >
      <path d="M4 1H1v9h9V7" />
      <path d="M7 1h3v3" />
      <line x1="10" y1="1" x2="5" y2="6" />
    </svg>
  ),
  arrowR: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <line x1="2" y1="7" x2="12" y2="7" />
      <path d="M8 3l4 4-4 4" />
    </svg>
  ),
  chevronR: (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M4 2l4 4-4 4" />
    </svg>
  ),
  menu: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <line x1="3" y1="6" x2="17" y2="6" />
      <line x1="3" y1="10" x2="17" y2="10" />
      <line x1="3" y1="14" x2="17" y2="14" />
    </svg>
  ),
  close: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <line x1="3" y1="3" x2="15" y2="15" />
      <line x1="15" y1="3" x2="3" y2="15" />
    </svg>
  ),
  flask: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3h6" />
      <path d="M9 3v6l-4 9a1 1 0 00.9 1.5h10.2a1 1 0 00.9-1.5L13 9V3" />
      <line x1="7" y1="14" x2="15" y2="14" />
      <circle cx="9.5" cy="16.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="13" cy="17.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  mortarboard: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11,3 21,8 11,13 1,8" />
      <path d="M6 10.5v5c0 0 2 2.5 5 2.5s5-2.5 5-2.5v-5" />
      <line x1="21" y1="8" x2="21" y2="14" />
    </svg>
  ),
  beaker: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h10" />
      <path d="M8 3v5.5L3.5 17A2 2 0 005.3 20h11.4a2 2 0 001.8-2.9L14 8.5V3" />
      <line x1="5" y1="13" x2="17" y2="13" />
    </svg>
  ),
};

