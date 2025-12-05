import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AutoScrollSlider({ images }) {
  const sliderRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      setWidth(sliderRef.current.scrollWidth / 2); // because duplicated
    }
  }, []);

  const sliderImages = [...images, ...images];

  return (
    <div className="overflow-hidden py-6 bg-white">
      <motion.div
        ref={sliderRef}
        className="flex gap-6"
        animate={{ x: [-0, -width] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {sliderImages.map((img, i) => (
          <div key={i} className="min-w-[250px]">
            <img
              src={img}
              alt=""
              className="w-60 h-56 object-cover rounded-xl shadow-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
