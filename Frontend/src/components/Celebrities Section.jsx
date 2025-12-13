import Gallery from "./Gallery";
import celeb1 from "../assets/images/Celebraty1.webp";
import celeb2 from "../assets/images/celebrate2.webp";
export default function CelebritiesGallery() {
  const images = [
    { src: celeb1, name: "" },
    { src: celeb2, name: "" },
  ];

return (
    <Gallery
      title="Celebrities & Media Presence"
      images={images}
      gridcol="2"
    />
  );
}
