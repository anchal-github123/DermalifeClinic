import Gallery from "./Gallery";
import img1 from "../assets/images/With 8 point facelift specialist Dr Mridu Miglani.jpeg";
import img2 from "../assets/images/With facial aesthetic mentor Dr Diksha Thakare.jpeg";
import img3 from "../assets/images/With Hair transplant mentor Dr Hanoch.jpeg";
import img4 from "../assets/images/With the mentor Dr Ajay Rana.webp";
import img5 from "../assets/images/With the stalwart in aesthetic medicine Dr Prithvi Vaity.jpeg";

import img6 from "../assets/images/Fellowship in Advanced aesthetics with Dr Joseph.webp";
import img7 from "../assets/images/Fellowship in Injectables and anti ageing medicine.jpeg";
import img8 from "../assets/images/Fellowship in Medical cosmetology.webp";
import img9 from "../assets/images/Fellowship in Medical micropigmentation.webp";


export default function StalwartsGallery() {
  const images = [
    {
      src: img1,
      name: "8 Point Facelift Training with Dr. Mridu Miglani",
    },
    {
      src: img2,
      name: "Facial Aesthetic Mentorship with Dr. Diksha Thakare",
    },
    {
      src: img3,
      name: "Hair Transplant Mentorship with Dr. Hanoch",
    },
    {
      src: img4,
      name: "Advanced Aesthetic Training with Dr. Ajay Rana",
    },
    {
      src: img5,
      name: "Guidance from Stalwart Dr. Prithvi Vaity",
    },
    {
      src: img6,
      name: "Fellowship in Advanced Aesthetics with Dr. Joseph",
    },
    {
      src: img7,
      name: "Fellowship in Injectables & Anti-Ageing Medicine",
    },
    {
      src: img8,
      name: "Fellowship in Medical Cosmetology",
    },
    {
      src: img9,
      name: "Fellowship in Medical Micropigmentation",
    },
  ];

  return (
    <Gallery
      title="Stalwarts of Aesthetic Medicine"
      images={images}
      gridcol="2"
    />
  );
}

