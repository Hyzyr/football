import React, { useState, useEffect } from "react";

export default function CountDown({ date }) {
  const [time, setTime] = useState({
    hours: "00",
    min: "00",
    sec: "00",
  });

  useEffect(() => {
    getTime();
    setInterval(getTime, 1000);
  }, [date]);

  const addZero = (n) => {
    if (n > 9) return n;
    return `0${n}`;
  };
  const getTime = () => {
    const date1 = new Date(date).getTime();
    const date2 = Date.now();
    if (!date1) return;

    const diffTime = Math.abs(date2 - date1);
    // const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
    // const daysPassed = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hoursPassed = Math.floor(diffTime / (1000 * 60 * 60));
    const minPassed = Math.floor(diffTime / (1000 * 60));
    const secPassed = Math.floor(diffTime / 1000);

    // const diffDays = daysPassed - diffWeeks * 7;
    // const diffHours = hoursPassed - daysPassed * 24;
    const diffHours = hoursPassed;
    const diffMin = minPassed - hoursPassed * 60;
    const diffSec = secPassed - minPassed * 60;

    setTime({
      //   weeks: diffWeeks,
      //   days: diffDays < 10 ? `0${diffDays}` : diffDays,
      hours: diffHours,
      min: diffMin,
      sec: diffSec,
    });
  };

  return `${addZero(time.hours)}:${addZero(time.min)}:${addZero(time.sec)}`;
}
