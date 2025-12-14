import Gallery from "./Gallery";
import img13 from "../assets/images/treatment1.jpeg";
import img14 from "../assets/images/treatment2.jpeg";
import img15 from "../assets/images/treatment3.jpeg";
import img16 from "../assets/images/treatment4.jpeg";
import img17 from "../assets/images/treatment5.jpeg";

export default function Clienttreatment() {
const images = [
        { src: img13, name: "RF skin tightening" },
        { src: img14, name: "Hair growth GFC treatment" },
        { src: img15, name: "Laser hydrafacial" },
         { src: img16, name: "Exosomes therapy for faster hair growth" },
        { src: img17, name: "carbon peel laser" },
    ];
    
      return <Gallery images={images}  title="Treatments with utmost patient"  mobileCols={2}/>;
 
}
