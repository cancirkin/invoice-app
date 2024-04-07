import { useState } from "react";
import IconCalendar from "@/assets/icons/icon-calendar.svg";
import IconArrowLeft from "@/assets/icons/icon-arrow-left.svg";
import IconArrowRight from "@/assets/icons/icon-arrow-right.svg";

export default function DatePicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentDay, setCurrentDay] = useState(new Date().getDate());
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const changeMonth = (value) => {
    if (currentMonth === 0 && value === -1) {
      setCurrentMonth(11);
      return;
    }
    if (currentMonth === 11 && value === 1) {
      setCurrentMonth(0);
      return;
    }
    if (currentMonth !== 11 || currentMonth !== 0) {
      setCurrentMonth(currentMonth + value);
    }
  };
  const getDayCountOfMonth = (month) => {
    if (month === 1) {
      return 28;
    }
    if (month % 2 === 0) {
      return 30;
    }
    return 31;
  };

  const currentYear = new Date().getFullYear();
  return (
    <div className="datepicker heading-s">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="datepicker__button heading-s"
      >
        {`${currentDay} ${months[currentMonth]} ${currentYear}`}
        <img src={IconCalendar} alt="" />
      </button>
      {isOpen && (
        <div className="datepicker__body">
          <div className="datepicker__body__header">
            <img
              onClick={() => {
                changeMonth(-1);
              }}
              src={IconArrowLeft}
              alt=""
            />
            <div> {`${currentDay} ${months[currentMonth]} ${currentYear}`}</div>
            <img
              onClick={() => {
                changeMonth(1);
              }}
              src={IconArrowRight}
              alt=""
            />
          </div>
          <div className="datepicker__body__days">
            {Array(getDayCountOfMonth(currentMonth))
              .fill()
              .map((_, index) => (
                <div
                  onClick={() => {
                    setCurrentDay(index + 1);
                    setIsOpen(false);
                  }}
                  key={index}
                  className={
                    "datepicker__body__days__day" +
                    (index + 1 === currentDay ? "--today" : "")
                  }
                >
                  {index + 1}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
