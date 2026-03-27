/* ═══════════════════════════════════════════════════════
   LAB PHOTOS
   To add a photo:
     1. Drop the file in src/assets/photos/
     2. Add an import below
     3. Add an entry to the PHOTOS array

   Recommended image spec:
     - Format: JPEG
     - Aspect ratio: 4:3 (landscape)
     - Minimum size: 800 × 600px (displays at 200 × 150px, 2× for retina)
     - File size: keep under 300KB (export at ~80% JPEG quality)
═══════════════════════════════════════════════════════ */

// import labPhoto1 from "../assets/photos/lab-photo-1.jpg";
import hanlablogo from "../assets/photos/hanlablogo.jpg";
import gcamp from "../assets/photos/GCaMP.jpg";
import neuralcircuit from "../assets/photos/neural-circuit-control.jpg";
import arntransverse from "../assets/photos/arn-transverse.jpg";
import calciumimage from "../assets/photos/calcium-image.jpg";
import lab2026 from "../assets/photos/labphoto2026.jpg";

export const PHOTOS = [
  { src: hanlablogo, caption: "Han Lab logo image" },
  { src: gcamp, caption: "GCaMP fiber photometry​" },
  { src: arntransverse, caption: "ARN transverse" },
  { src: neuralcircuit, caption: "Neural circuit control" },
  { src: calciumimage, caption: "RNA-scop in-situ hybridisation" },
  { src: lab2026, caption: "4th year students 2026" },
];
