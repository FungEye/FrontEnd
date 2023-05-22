import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Chart from "./HistoryConditionChart";
import "../css/History.css";
import "../css/General.css";
export default function Carousel({ data }) {
  return (
    <div className="conditions-carousel-history very-slightly-faded">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        speed={800}
        centeredSlides={true}
      >
        <SwiperSlide>
          <Chart data={data.temperature} text="Temperature" />
        </SwiperSlide>
        <SwiperSlide>
          <Chart data={data.humidity} text="Humidity" />
        </SwiperSlide>
        <SwiperSlide>
          <Chart data={data.co2} text="CO2" />
        </SwiperSlide>
        <SwiperSlide>
          <Chart data={data.light} text="Light" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
