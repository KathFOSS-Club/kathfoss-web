"use client";
import {DatePicker} from "@nextui-org/react";
import {parseZonedDateTime, parseAbsoluteToLocal} from "@internationalized/date";

import { log, time } from "console";           

import React, { useEffect, useState } from "react";


export default function HeroSection()  {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [selectedDate, setSelectedDate] = useState(parseAbsoluteToLocal("2025-01-15T07:45:00Z"));
  const dateTime=new Date();


  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    console.log("Selected Date:", newDate);
  };
 


  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        const newSeconds = prevSeconds + 1;

        if (newSeconds === 60) {
          setMinutes((prevMinutes) => {
            const newMinutes = prevMinutes + 0.5;

            if (newMinutes === 60) {
              setHours((prevHours) => {
                const newHours = prevHours + 0.5;

                if (newHours === 24) {
                  setDays((prevDays) => prevDays + 0.5);
                  return 0; 
                }
                return newHours; 
              });
              return 0; 
            }
            return newMinutes; 
          });
          return 0; 
        }

        return newSeconds; 
      });
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="w-[51.823vw] h-[24.3vh] bg-[#1F2531] mt-96 ml-[23vw] flex flex-col justify-between rounded-md   ">

    <div className=" flex justify-evenly items-center mt-6 height-[10vh]">
      <span className="days text-6xl">{days}<span className="text-[2vh]"> {days==1?'Day':'Days'}</span></span>
      <span className="colon text-6xl">:</span>
      <span className="hours text-6xl">{hours}<span className="text-[2vh]">  {hours==1?'Hour':'Hours'}</span></span>
      <span className="colon text-6xl">:</span>
      <span className="minutes text-6xl">{minutes}<span className="text-[2vh]"> {minutes==1?'Minute':'Minutes'}</span></span>
      <span className="colon text-6xl">:</span>
      <span className="second text-6xl">{seconds}<span className="text-[2vh]"> {seconds==1?'Second':'Seconds'}</span></span>


 
      
    </div>
     <div className=" flex justify-center">

      {/* <DatePicker className="w-[15vw] h-[10vh] bg-slate-600 flex justify-center items-center" label="Date"  /> */}
     
      <DatePicker
        className="w-[20vw] h-[10vh]   flex items-center justify-center rounded hover:bg-[#140A28] "
        defaultValue={parseAbsoluteToLocal("2025-01-15T07:45:00Z")}
        value={selectedDate}
        onChange={handleDateChange}
        label="Date and Time"
        labelPlacement="outside" 

      />
    </div>

    </div>
  );
}
