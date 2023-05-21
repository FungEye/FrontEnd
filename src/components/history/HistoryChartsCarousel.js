import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { mockData } from "./HistoryMockData";
import Chart from "./HistoryConditionChart";
import "../css/History.css";
import "../css/General.css";
export default function Carousel({ data }) {
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
          <Chart data={mockData.temp.values} text="Temperature" />
        </SwiperSlide>
        <SwiperSlide>
          <Chart data={mockData.temp.values} text="Humidity" />
        </SwiperSlide>
        <SwiperSlide>
          <Chart data={mockData.temp.values} text="CO2" />
        </SwiperSlide>
        <SwiperSlide>
          <Chart data={mockData.temp.values} text="Light" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
