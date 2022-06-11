import { useEffect, useState } from "react";

const CountDown = ({ date }) => {
  const initState = {
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  };
  const [time, setTime] = useState(initState);

  const getTime = (date) => {
    const date2 = new Date(date).getTime();
    const date1 = Date.now();
    if (!date1) return;

    const diffTime = Math.abs(date2 - date1);
    // const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
    const daysPassed = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hoursPassed = Math.floor(diffTime / (1000 * 60 * 60));
    const minPassed = Math.floor(diffTime / (1000 * 60));
    const secPassed = Math.floor(diffTime / 1000);

    // const diffDays = daysPassed - diffWeeks * 7;
    const diffHours = hoursPassed - daysPassed * 24;
    const diffMin = minPassed - hoursPassed * 60;
    const diffSec = secPassed - minPassed * 60;
    setTime({
      //   weeks: diffWeeks,
      days: daysPassed,
      hours: diffHours,
      min: diffMin,
      sec: diffSec,
    });
  };

  useEffect(() => {
    const dateTime = new Date(date).getTime();

    if (dateTime - Date.now() <= 0) {
      setTime(initState);
    } else {
      getTime(date);
      setInterval(() => getTime(date), 1000);
    }
    // eslint-disable-next-line
  }, [date]);

  const addZero = (n) => {
    if (n > 9) return n;
    return `0${n}`;
  };

  return `${addZero(time.days)}:${addZero(time.hours)}:${addZero(
    time.min
  )}:${addZero(time.sec)}`;
};

export default CountDown;
