import AutoScrollSlider from "./AutoScrollSlider";
import img1 from "../assets/images/BeforAfter1.webp";
import img2 from "../assets/images/BeforAfter2.webp";
import img3 from "../assets/images/BeforeAfter3.webp";
import img4 from "../assets/images/BeforeAfter4.webp";
import img5 from "../assets/images/BeforeAfter5.webp";
export default function Slider() {
  const images = [img1, img2, img3, img4,img5,img1, img2, img3, img4,img5];
  return (
    <div className="py-12 bg-gray-100 w-full">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
       Results
      </h2><AutoScrollSlider images={images} />
    </div>
  );
}
