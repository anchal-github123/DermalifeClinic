import Gallery from "./Gallery";
import img1 from "../assets/images/gallery1.webp";
import img2 from "../assets/images/gallery2.webp";
import img3 from "../assets/images/LipFilller.webp";
import img4 from "../assets/images/carbonpeel.webp";
import img5 from "../assets/images/Burn Scar Removal.webp";
import img6 from "../assets/images/eyebro.webp";
import img7 from "../assets/images/Facelift.webp";
import img8 from "../assets/images/earlob.webp";
import img9 from "../assets/images/knees.webp";
import img10 from "../assets/images/melasma.webp";
import img11 from "../assets/images/botox.webp"
export default function ClinicGallery() {
  const images = [img1, img2, img3, img4, img5,img6,img7,img8,img9,img10,img11];
  return <Gallery images={images} />;
}
