/* ═══════════════════════════════════════════════════════
   RESEARCH PILLARS DATA
   Each pillar is displayed as a full section on the Research page.
   icon: key from the Ico object in constants.jsx (e.g. "circuit", "repro", "homeo")
   tags: short keyword pills shown in the left column
   paras: array of paragraph strings shown in the right column
═══════════════════════════════════════════════════════ */

export const PILLARS = [
  {
    icon: "circuit",
    num: "01",
    title: "Neural Circuits for Growth",
    tags: [
      "GHRH neurons",
      "SST neurons",
      "Steroid hormone",
      "Sex difference",
      "Ageing",
    ],
    paras: [
      "Pulsatile growth hormone (GH) secretion is a fundamental regulator of growth, metabolism, and tissue maintenance, yet the neural mechanisms that generate and shape these dynamics remain poorly understood. We investigate how hypothalamic circuits coordinate GH pulse patterns across sex and lifespan, and how their activity is modulated by endocrine feedback.",
      "By combining in vivo approaches such as fibre photometry, optogenetics, chemogenetics, and miniature microscopy, we aim to define how neural activity encodes hormonal rhythms and how these interactions give rise to adaptive physiological states.",
    ],
  },
  {
    icon: "repro",
    num: "02",
    title: "Neural Circuits for Reproduction",
    tags: [
      "Kisspeptin neurons",
      "GnRH neurons",
      "Pulse generator",
      "Surge generator",
      "Sex difference",
      "Ageing",
    ],
    paras: [
      "Reproductive hormone release depends on neural circuits that generate both pulsatile and surge dynamics with remarkable precision. Our previous work established synchronised hypothalamic activity as a key mechanism underlying luteinising hormone (LH) pulses. Building on this foundation, we investigate how distinct but interacting hypothalamic circuits give rise to these different modes of hormone secretion.",
      "In particular, we examine how pulse- and surge-generating populations in the arcuate nucleus and preoptic area coordinate their activity, and how gonadotropin-releasing hormone neurons integrate these signals to produce appropriate endocrine outputs. Using advanced in vivo optical approaches, we aim to define how these circuit dynamics regulate reproductive state, fertility, and how they are reshaped across ageing.",
    ],
  },
  {
    icon: "homeo",
    num: "03",
    title: "Neural Circuit Interactions Controlling State Transitions",
    tags: [
      "Neural identity",
      "Transition",
      "Puberty",
      "Menopause",
      "Behaviour",
    ],
    paras: [
      "Growth, attainment of fertility, and reproductive ageing are fundamental processes that span the lifespan. Rather than operating independently, the neural and endocrine systems governing growth and reproduction are tightly interconnected. We investigate how these axes interact at the circuit level to shape physiological and behavioural state transitions across life stages.",
      "We aim to understand how shifts in one system influence the other, and how these interactions drive key transitions such as puberty, reproductive competence, and ageing using integrated approaches that probe neural activity, connectivity, and hormonal dynamics.",
    ],
  },
];
