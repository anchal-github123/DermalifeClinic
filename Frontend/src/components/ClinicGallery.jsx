import Gallery from "./Gallery";

import img6 from "../assets/images/eyebro.webp";
import img7 from "../assets/images/Facelift.webp";
import img8 from "../assets/images/earlob.webp";
import img9 from "../assets/images/knees.webp";
import img10 from "../assets/images/melasma.webp";
import img11 from "../assets/images/botox.webp";
import img12 from "../assets/images/Acne-scars (1).webp";

export default function ClinicGallery() {
  const images = [
    { src: img6, name: "Eyebrow Micropigmentation" },
    { src: img9, name: "Dark Knees Treatment" },
    { src: img10, name: "Melasma Treatment" },
    { src: img8, name: "Ear Lobe Repair" },
    { src: img11, name: "Botox Treatment" },
    { src: img12, name: "Acne Scar Laser Treatment" },
    { src: img7, name: "Facelift" }
  ];

  return <Gallery images={images} />;
}
