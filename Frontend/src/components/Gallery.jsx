export default function Gallery({ images }) {
  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Clinic Gallery
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md group cursor-pointer"
          >
            <img
              src={img}
              className="w-full h-48 object-cover group-hover:scale-110 duration-500"
              alt="clinic"
              />
          </div>
        ))}
      </div>
    </div>
  );
}
