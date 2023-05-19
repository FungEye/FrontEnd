import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./History.css";
import "../../css/General.css";
import Table from "./HistoryTable";

function ConditionsCarousel() {
  return (
    <div className="conditions-carousel-history very-slightly-faded">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        speed={800}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        centeredSlides={true}
      >
        <SwiperSlide>
          <Table />
        </SwiperSlide>
        <SwiperSlide>
          <Table />
        </SwiperSlide>
        <SwiperSlide>
          <Table />
        </SwiperSlide>
        <SwiperSlide>
          <Table />
        </SwiperSlide>
        <SwiperSlide>
          <Table />
        </SwiperSlide>
        <SwiperSlide>
          <Table />
        </SwiperSlide>
        <SwiperSlide>
          <Table />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ConditionsCarousel;
