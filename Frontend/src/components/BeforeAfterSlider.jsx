import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from "react-compare-slider";

export default function BeforeAfterSlider({ before, after, title }) {
  return (
    <div className="max-w-xl mx-auto my-8">
      {title && (
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
          {title}
        </h2>
      )}

      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={before} alt="Before Image" />}
        itemTwo={<ReactCompareSliderImage src={after} alt="After Image" />}
        style={{
          width: "100%",
          height: "380px",
          borderRadius: "12px",
          overflow: "hidden"
        }}
      />
    </div>
  );
}
