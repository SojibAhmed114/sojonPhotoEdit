
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
const Diff = ({beforeImage, afterImage}) => {
  return (
    <section>
      <div className=" bg-black px-1 pb-1  rounded-md w-full">
        <div className="flex gap-2 p-2">
          <div className="size-3 rounded-full bg-red-500"></div>
          <div className="size-3 rounded-full bg-yellow-500"></div>
          <div className="size-3 rounded-full bg-green-500"></div>
        </div>
        <div>
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src={beforeImage}
                srcSet={beforeImage}
                alt="Image one"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={afterImage}
                srcSet={afterImage}
                alt="Image two"
              />
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Diff