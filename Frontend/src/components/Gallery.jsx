export default function Gallery({ images }) {
  return (
    <div className="bg-gray-100 py-5">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Clinic Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md group cursor-pointer bg-white"
          >
            <img
              src={item.src}
              className="w-full h-45 object-cover group-hover:scale-110 duration-500"
              alt={item.name}
            />

            <p className="text-center font-semibold text-gray-700 py-3 text-m">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
