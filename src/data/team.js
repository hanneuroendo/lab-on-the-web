/* ═══════════════════════════════════════════════════════
   TEAM DATA
   To add a photo:
     1. Drop the file in src/assets/members/
     2. Uncomment the matching import below
     3. Uncomment the matching photo: field in the member object
   categories options: "Principal Investigator" | "Researcher" | "Student" | "Staff"
   Each member can have multiple categories, e.g. categories: ["Principal Investigator", "Researcher"]
   project: optional short project name, shown in bio modal and alumni section
   To move a member to alumni:
     1. Add alumni: true
     2. Add joined: "YYYY" and left: "YYYY"
     They will be removed from the active grid and appear in the Alumni section.
═══════════════════════════════════════════════════════ */

import { T } from "../constants";

import suYoungHan from "../assets/members/su-young-han.jpg";
import emmaDawson from "../assets/members/emma-dawson.jpg";
import hamishCampbell from "../assets/members/hamish-campbell.jpg";
import mimiFoglia from "../assets/members/mimi-foglia.jpg";
import brynCarney from "../assets/members/bryn-carney.jpg";
import stevenSeo from "../assets/members/steven-seo.jpg";
import lauraVarga from "../assets/members/laura-varga.jpg";

export const TEAM = [
  {
    initials: "SH",
    slug: "su-young-han",
    name: "Dr. Su Young Han",
    role: "Principal Investigator",
    categories: ["Principal Investigator", "Researcher"],
    bio: [
      "Su is a Principal Investigator at the University of St Andrews (UK), where she studies the neural control of endocrine function across the lifespan. Her research focuses on how hypothalamic circuits generate and coordinate hormonal rhythms, particularly in the contexts of growth, reproduction, and ageing.",
      "She completed her undergraduate and doctoral training at the University of Otago (New Zealand). Her early research with Dr Chris Bolter examined ion channel mechanisms underlying vagal slowing of heart rate, shaping her interest in physiological regulation. During this time, she also worked as a research assistant in a neuroscience laboratory, where she developed a strong interest in how brain-body interactions are coordinated, motivating her transition into neuroendocrinology.",
      "She continued into her PhD under the supervision of Professor Colin Brown, investigating plastic changes in vasopressin neuron activity in hypertension, where she became increasingly interested in the dynamic interplay between neural circuits and endocrine function. She then undertook postdoctoral research with Professor Allan Herbison, where she developed and established advanced in vivo optical approaches to study hypothalamic circuits, and used these to identify key mechanisms by which arcuate nucleus kisspeptin neurons generate pulsatile gonadotrophin-releasing hormone (GnRH) and luteinising hormone (LH) secretion.",
      "Her scientific perspective is grounded in the concept embodied by natura non facit saltus — nature does not make leaps — and that small, gradual changes shape both biological systems and human lives. This perspective informs her approach to neuroendocrinology, where dynamic processes unfold over time and are closely linked to lived experience.",
      "Beyond the lab, Su is a daughter, sister, wife, mother of two, and a friend and colleague. She values the richness of these roles and the perspectives they bring, recognising that both science and life are shaped not in isolation, but through connection, mentorship, and shared experience. In her spare time, she enjoys baking, cooking — especially Korean cuisine — walking, playing badminton, and reading comics. She also has a deep affection for animals, particularly dogs and cats.",
    ],
    color: T.navy,
    // email: ["sh413", "st-andrews.ac.uk"].join("@"),
    // project: "",
    isPI: true,
    photo: suYoungHan,
  },
  {
    initials: "LV",
    slug: "laura-kibedi-varga",
    name: "Laura Kibédi-Varga",
    role: "Internship Student",
    categories: ["Researcher"],
    bio: [
      "Laura joined us to explore the role of dynorphin in kisspeptin neuron synchronisation and its impact on reproductive hormone regulation. Having been awarded the StARIS internship to work in the lab, she is excited to contribute to this research and deepen her understanding of neuroendocrine mechanisms. She will begin an MPhil in Clinical Neurosciences at the University of Cambridge next year, and sees this experience as an important step in preparing for a PhD later in her academic journey.",
    ],
    color: "#6a7a8a",
    photo: lauraVarga,
    // project: "",
    // alumni: true, joined: "YYYY", left: "YYYY",
  },
  {
    initials: "HC",
    slug: "hamish-campbell",
    name: "Hamish Campbell",
    role: "Undergraduate Student",
    categories: ["Student"],
    bio: [
      "Together with Bryn, Hamish is working on validating a growth hormone ELISA, identifying optimal antibody pairs to establish an in-house assay.",
    ],
    color: "#6a7a8a",
    photo: hamishCampbell,
    project: "Validation of an ultra-sensitive ELISA for mouse GH​",
    // alumni: true, joined: "YYYY", left: "YYYY",
  },
  {
    initials: "BC",
    slug: "bryn-carney",
    name: "Bryn Carney",
    role: "Undergraduate Student",
    categories: ["Student"],
    bio: [
      "Together with Hamish, Bryn is working on validating a growth hormone ELISA, identifying optimal antibody pairs to establish an in-house assay.",
    ],
    color: "#6a7a8a",
    photo: brynCarney,
    project: "Validation of an ultra-sensitive ELISA for mouse GH​",
    // alumni: true, joined: "YYYY", left: "YYYY",
  },
  {
    initials: "ED",
    slug: "emma-dawson",
    name: "Emma Dawson",
    role: "Undergraduate Student",
    categories: ["Student"],
    bio: [
      "Together with Mimi, Emma is working to investigate the distribution of GHRH and kisspeptin neurons across early and adult stages in female mice using RNAscope.",
    ],
    color: "#6a7a8a",
    photo: emmaDawson,
    project:
      "Investigating pubertal changes of GHRH & Kisspeptin neurons in the arcuate nucleus of female mice",
    // alumni: true, joined: "YYYY", left: "YYYY",
  },
  {
    initials: "MF",
    slug: "mimi-foglia",
    name: "Mimi Foglia",
    role: "Undergraduate Student",
    categories: ["Student"],
    bio: [
      "Together with Emma, Mimi is working to investigate the distribution of GHRH and kisspeptin neurons across early and adult stages in female mice using RNAscope.",
    ],
    color: "#6a7a8a",
    photo: mimiFoglia,
    project:
      "Investigating pubertal changes of GHRH & Kisspeptin neurons in the arcuate nucleus of female mice",
    // alumni: true,
    // joined: "2023",
    // left: "2026",
  },
  {
    initials: "SS",
    slug: "steven-seo",
    name: "Steven Seo",
    role: "Operations and Data Manager",
    categories: ["Staff"],
    bio: [
      "Steven is our Operations and Data Manager, overseeing the smooth execution of all lab functions. With a distinct academic background spanning Information Science, Pharmacy, and Theology, he brings a truly unique perspective to our operations, equipping our team with the data-driven insights and robust support needed to lead in our field.",
    ],
    color: "#6a7a8a",
    photo: stevenSeo,
    // project: "",
    // alumni: true, joined: "YYYY", left: "YYYY",
  },
];
