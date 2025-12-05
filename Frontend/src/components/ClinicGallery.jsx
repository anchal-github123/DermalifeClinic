import Gallery from "./Gallery";
import img1 from "../assets/images/gallery1.webp";
import img2 from "../assets/images/gallery2.webp";
import img3 from "../assets/images/LipFilller.webp";
import img6 from "../assets/images/Anti-agingimg (4).webp";
import img4 from "../assets/images/carbonpeel.webp";
import img5 from "../assets/images/Burn Scar Removal.webp";
export default function ClinicGallery() {
  const images = [img1, img2, img3, img4, img5,img6];
  return <Gallery images={images} />;
}
