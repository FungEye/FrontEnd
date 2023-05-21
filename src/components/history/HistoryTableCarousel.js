import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../css/History.css";
import "../css/General.css";
import Table from "./HistoryTable";
import { useState, useEffect } from "react";

function ConditionsCarousel({ data }) {
  const [slides, setSlides] = useState([]);
  function createOneDayData(day, month) {
    return {
      day,
      month,
      previousDay: 0,
      previousMonth: 0,
      nextDay: 0,
      nextMonth: 0,
      values: [],
    };
  }

  //To sanitize the data, we need to take three steps:
  // 1. Create object with days and month, without repeating values based on received data.
  //    For instance, there 5 measurements for 15/05
  //    so we will create one object for this day, without assigning values for now.
  // 2. Assign values to the object with the same day and month.
  // 3. Create slides for each day.
  // All of this needs to happen in a sequence as we have to wait for the previous step to finish.
  // That's why there are three callbacks.
  // 1. createAllDays, 2. populateData, 3. createSlides

  // const createSlides = useCallback(() => {
  //   let element = daysData.map((d) => (
  //     <SwiperSlide key={Math.random()}>
  //       <Table data={d} />
  //     </SwiperSlide>
  //   ));
  //   setSlides(element);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [daysData]);

  // const populateData = useCallback(() => {
  //   data.forEach((e) => {
  //     let day = e.id.dateTime.day;
  //     let month = e.id.dateTime.month;
  //     let existingDayData = daysData.find(
  //       (d) => d.day === day && d.month === month
  //     );
  //     if (existingDayData !== undefined) {
  //       existingDayData.values.push(e);
  //     }
  //   });
  //   console.log("PopulateDays", daysData);
  //   createSlides();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [daysData]);

  // const createDays = useCallback(() => {
  //   let days = [];
  //   data.forEach((e) => {
  //     let day = e.id.dateTime.day;
  //     let month = e.id.dateTime.month;
  //     let existingDayData = days.find(
  //       (d) => d.day === day && d.month === month
  //     );
  //     if (existingDayData === undefined) {
  //       let newDayData = createOneDayData(day, month);
  //       days.push(newDayData);
  //     } else {
  //     }
  //   });
  //   console.log("CreateDays", days);
  //   setDaysData(days);
  //   populateData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [data]);

  const createAllDaysPromise = (data) => {
    let days = [];
    data.forEach((e, index) => {
      let day = e.id.dateTime.day;
      let month = e.id.dateTime.month;
      let hour = e.id.dateTime.hour;
      let minute = e.id.dateTime.minute;
      let existingDayData = days.find(
        (d) => d.day === day && d.month === month
      );
      if (existingDayData === undefined) {
        let newDayData = createOneDayData(day, month, hour, minute);
        days.push(newDayData);
      }
    });

    function sortMonths(a, b) {
      return a.month - b.month;
    }

    function sortDays(a, b) {
      if (a.month === b.month) {
        return a.day - b.day;
      }
    }
    days.sort((a, b) => sortMonths(a, b));
    days.sort((a, b) => sortDays(a, b));
    days.forEach((element, index) => {
      console.log(index);
      console.log(element);
      if (index !== 0 && index !== days.length - 1) {
        days[index].previousDay = days[index - 1].day;
        days[index].previousMonth = days[index - 1].month;
        days[index].nextDay = days[index + 1].day;
        days[index].nextMonth = days[index + 1].month;
      } else if (index === 0) {
        days[index].nextDay = days[index + 1].day;
        days[index].nextMonth = days[index + 1].month;
      } else if (index === days.length - 1) {
        days[index].previousDay = days[index - 1].day;
        days[index].previousMonth = days[index - 1].month;
      }
    });

    console.log("Created days: ", days);

    return new Promise((resolve, reject) => {
      if (days.length > 0) {
        resolve(days);
      } else {
        reject(new Error("Creating days failed!"));
      }
    });
  };

  const populateDataPromise = (days, data) => {
    let populatedDays = days;
    data.forEach((e) => {
      let day = e.id.dateTime.day;
      let month = e.id.dateTime.month;
      let existingDayData = populatedDays.find(
        (d) => d.day === day && d.month === month
      );
      if (existingDayData !== undefined) {
        existingDayData.values.push(e);
      }
    });
    console.log("PopulateDays", populatedDays);

    return new Promise((resolve, reject) => {
      if (days.length > 0) {
        resolve(populatedDays);
      } else {
        reject(new Error("Populate days failed!"));
      }
    });
  };

  const createSlidesInPromise = (populatedDays) => {
    let element = populatedDays.map((d) => (
      <SwiperSlide key={Math.random()}>
        <Table data={d} />
      </SwiperSlide>
    ));
    setSlides(element);
  };

  const createHistory = (data) => {
    return createAllDaysPromise(data)
      .then((days) => populateDataPromise(days, data))
      .then((populatedDays) => createSlidesInPromise(populatedDays));
  };

  useEffect(() => {
    createHistory(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="conditions-carousel-history very-slightly-faded">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        speed={800}
        centeredSlides={true}
      >
        {slides}
      </Swiper>
    </div>
  );
}

export default ConditionsCarousel;
