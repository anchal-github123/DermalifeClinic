export default function CommonHeading({heading,para}) {
  return (
    <div className="mb-3">
    <h2 className="text-4xl md:text-5xl font-semibold  text-dark">{heading}</h2>
    <p className="text-tertiary mt-2 max-w-[90%]">{para}</p>
      </div>
  )
}
