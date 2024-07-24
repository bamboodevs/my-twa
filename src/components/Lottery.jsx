import React from "react";
import Countdown from "react-countdown";
import "./Lottery.css";

const Lottery = () => {
  // تاریخ پایان شمارش معکوس
  const countdownEndDate = new Date("2024-08-14T23:59:59");
  // هر بار کاربر وارد شود 30 روز بعد را نشان می دهد
  // countdownEndDate.setDate(countdownEndDate.getDate() + 30);

  // تابع رندرینگ سفارشی
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="countdown">Time's up!</span>;
    } else {
      return (
        <div className="countdown py-3 d-flex justify-content-center">
          <div className="time d-flex justify-content-center alig-items-center flex-wrap ">
            <span className="col-12 text-center">{days}</span>
            <span className="label col-12 text-center">days</span>
          </div>
          <div className="time d-flex justify-content-center align-items-center flex-wrap">
            <span className="col-12 text-center">{hours}</span>
            <span className="label col-12 text-center">hours</span>
          </div>
          <div className="time d-flex justify-content-center align-items-center flex-wrap">
            <span className="col-12 text-center">{minutes}</span>
            <span className="label col-12 text-center">minutes</span>
          </div>
          <div className="time d-flex justify-content-center align-items-center flex-wrap">
            <span className="col-12 text-center">{seconds}</span>
            <span className="label col-12 text-center">seconds</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="lottery-block-content d-flex justify-content-center align-items-center flex-wrap">
      <div className="col-12 lottery-balance d-flex justify-content-between">
        <small>Deposited into the Lottery Fund :</small>
        <span className="mx-2 badge badge-lg bg-success"> 1730.58 $ USDT</span>
      </div>
      <div className="col-12 lottery-countdown">
        <Countdown date={countdownEndDate} renderer={renderer} />
      </div>
    </div>
  );
};

export default Lottery;
