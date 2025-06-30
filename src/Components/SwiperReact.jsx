// Import Swiper React components
import bOne from "../assets/bOne.jpg";
import bTwo from "../assets/bTwo.jpg";
import bThree from "../assets/bThree.jpg";
import bFive from "../assets/bFive.jpg";
import bSix from "../assets/bSix.jpg";
import bSeven from "../assets/bSeven.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function SwiperReact() {
  return (
    <section>
      <div className="m-5">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false} // 
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {[bSeven, bOne, bTwo, bSeven, bSeven, bThree, bFive, bSix].map(
            (imgSrc, index) => (
              <SwiperSlide key={index}>
                <img
                  className="h-[400px] w-full rounded-xl"
                  src={imgSrc}
                  alt={`Slide ${index + 1}`}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
}
