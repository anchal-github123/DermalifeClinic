import Gallery from "./Gallery";
import celeb1 from "../assets/images/Celebraty1.webp";
import celeb2 from "../assets/images/celebrate2.webp";
import vdo from "../assets/images/Miti.mp4"
export default function CelebritiesGallery() {
  const images = [
    { src: celeb1, name: "Ollywood actress Mithi" },
    { src: celeb2, name: "Ollywood to Bollywood star Prakruti Mishra" },
  ];

return (
    <Gallery
      title="Celebrities & Media Presence"
      images={images}
         mobileCols={2}
         vdo={vdo}
    />
  );
}
