import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../css/ConditionsCarousel.css";
import MushroomConditions from "../Mushroom Selection Page/MushroomConditions";
import { fromPhasesToStats } from "../../util/ConditionsConverter";

function ConditionsCarousel(props) {
  let shroomdata = props.conditions;
  let shroomstats = fromPhasesToStats(shroomdata);
  let temperature = shroomstats.temperature;
  let humidity = shroomstats.humidity;
  let co2 = shroomstats.co2;
  let light = shroomstats.light;

  return (
    <div className="conditions-carousel very-slightly-faded">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        speed={800}
        centeredSlides={true}
      >
        <SwiperSlide>
          <MushroomConditions type="temperature" conditions={temperature} />
        </SwiperSlide>
        <SwiperSlide>
          <MushroomConditions type="humidity" conditions={humidity} />
        </SwiperSlide>
        <SwiperSlide>
          <MushroomConditions type="co2" conditions={co2} />
        </SwiperSlide>
        <SwiperSlide>
          <MushroomConditions type="light" conditions={light} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ConditionsCarousel;
