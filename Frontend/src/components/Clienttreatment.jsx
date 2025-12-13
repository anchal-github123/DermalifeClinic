import Gallery from "./Gallery";
import img13 from "../assets/images/treatment1.jpeg";
import img14 from "../assets/images/treatment2.jpeg";
import img15 from "../assets/images/treatment3.jpeg";
import img16 from "../assets/images/treatment4.jpeg";
import img17 from "../assets/images/treatment5.jpeg";

export default function Clienttreatment() {
const images = [
        { src: img13, name: "Lip Filler" },
        { src: img14, name: "Laser Tattoo Removal" },
        { src: img15, name: "Carbon laser peel" },
         { src: img16, name: "Laser Mole Removal" },
        { src: img17, name: "Eyebrow Micropigmentation" },
    ];
    
      return <Gallery images={images}  title="Treatments Photos"  gridcol="2"/>;
 
}
