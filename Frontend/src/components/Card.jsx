import { Link } from "react-router-dom";
import { memo } from "react";
 function Card({ title, desc, img,id }) {
  return (
    <div
      className="
        bg-white 
        rounded-3xl 
        shadow-sm 
        border border-gray-200
        hover:shadow-lg 
        transition-all 
        duration-300 
        hover:-translate-y-1
        cursor-pointer
        p-5 
      "
    >
      {/* IMAGE */}
      <div className="w-full h-[220px] overflow-hidden rounded-2xl mb-4">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-semibold text-dark mb-2">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-tertiary text-sm leading-relaxed mb-4">
        {desc}
      </p>

      {/* BUTTON */}
    <Link
  to={`/serviceDetails/${id}`}

  className="
    inline-block 
    mt-2
    text-sm
    font-medium 
    text-white 
    bg-primary
    py-3 px-8
    rounded-xl 
    hover:bg-secondary
    transition-all
  "
>
 View Details
</Link>

    </div>
  );
}
export default memo(Card);