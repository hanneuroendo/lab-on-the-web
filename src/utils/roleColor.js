import { T } from "../constants";

// Seniority-based colour scheme for role pills.
// Colours progress from lightest (undergraduate) to darkest (PI),
// all derived from the existing navy/teal/slate palette.
// To add a new role, add a matching condition before the fallback.
export const roleColor = (role) => {
  const r = role.toLowerCase();
  if (r.includes("principal investigator"))
    return { background: T.navy, color: T.white, border: T.navy }; // PI — navy solid
  if (r.includes("postdoc") || r.includes("research fellow"))
    return {
      background: "rgba(47,72,88,0.1)",
      color: T.navyDark,
      border: "rgba(47,72,88,0.25)",
    }; // Postdoc — dark navy tint
  if (r.includes("phd"))
    return {
      background: "rgba(61,143,166,0.15)",
      color: "#1e6a80",
      border: "rgba(61,143,166,0.35)",
    }; // PhD — medium teal
  if (r.includes("mphil") || r.includes("masters") || r.includes("master"))
    return {
      background: "rgba(61,143,166,0.08)",
      color: T.teal,
      border: "rgba(61,143,166,0.2)",
    }; // Masters/MPhil — light teal
  if (r.includes("undergraduate") || r.includes("intern"))
    return {
      background: T.tealPale,
      color: T.teal,
      border: "rgba(61,143,166,0.15)",
    }; // Undergrad/Intern — palest teal
  if (r.includes("staff") || r.includes("manager") || r.includes("operations"))
    return { background: T.slatePale, color: T.slate, border: T.slatePale }; // Staff — neutral slate
  return {
    background: T.tealPale,
    color: T.teal,
    border: "rgba(61,143,166,0.15)",
  }; // Fallback
};
