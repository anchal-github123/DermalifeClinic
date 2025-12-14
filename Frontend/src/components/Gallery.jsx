export default function Gallery({ images, title, mobileCols = 1,vdo }) {
  const mobileGridClass =
    mobileCols === 2 ? "grid-cols-2" : "grid-cols-1";

  return (
    <div className="bg-gray-100 py-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        {title}
      </h2>

      <div
        className={`grid ${mobileGridClass} sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4 max-w-7xl mx-auto`}
      >
        {images.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md group cursor-pointer bg-white"
          >
            <img
              src={item.src}
              alt={item.name}
              loading="lazy"
              className="w-full h-48 object-cover group-hover:scale-110 duration-500"
            />

            {item.name && (
              <p className="text-center font-semibold text-gray-700 py-3 text-sm">
                {item.name}
              </p>
            )}
          </div>
        ))}
      </div>
      {
        vdo &&   <video src={vdo} controls className="h-60 w-full mt-3"></video>
      }
    
    </div>
  );
}
