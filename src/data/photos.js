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

import hanlablogo from "../assets/photos/hanlablogo.jpg";
import gcamp from "../assets/photos/GCaMP.jpg";
import rostrocaudal from "../assets/photos/rostro-caudal.jpg";
import arntransverse from "../assets/photos/arn-transverse.jpg";
import calciumimage from "../assets/photos/calcium-image.jpg";
import calciumactivity from "../assets/photos/calcium-activity.jpg";
import miniscopeimaging from "../assets/photos/miniscope-imaging.jpg";
import lab2026 from "../assets/photos/labphoto2026.jpg";

export const PHOTOS = [
  { src: hanlablogo, caption: "Han Lab logo" },
  { src: gcamp, caption: "GCaMP fibre schematics" },
  { src: arntransverse, caption: "Arcuate kisspeptin neurons" },
  { src: rostrocaudal, caption: "Rostro-caudal distribution of GHRH neurons" },
  { src: calciumimage, caption: "RNAscope in-situ hybridisation" },
  {
    src: miniscopeimaging,
    caption: "Miniscope imaging of kisspeptin neuronal activity",
  },
  {
    src: calciumactivity,
    caption: "In vivo calcium activity of GHRH neuron population",
  },

  { src: lab2026, caption: "Lab photo March 2026" },
];
