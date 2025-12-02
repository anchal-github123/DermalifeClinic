import { Link } from "react-router-dom";

export default function Card({ title, desc, img, id }) {
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
        p-4 md:p-5
      "
    >
      {/* IMAGE */}
      <div className="w-full h-[200px] md:h-[220px] overflow-hidden rounded-2xl mb-3">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-lg md:text-xl font-semibold text-dark mb-1">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-tertiary text-sm leading-relaxed mb-3">
        {desc}
      </p>

      {/* BUTTON */}
      <Link
        to={`/serviceDetails/${id}`}
        className="
          inline-block 
          text-sm
          font-medium 
          text-white 
          bg-primary
          w-full
          text-center
          py-2.5 px-6
          rounded-lg 
          hover:bg-secondary
          transition-all
        "
      >
        View Details
      </Link>

    </div>
  );
}
