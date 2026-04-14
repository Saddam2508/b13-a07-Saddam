"use client";
import { TimelineContext } from "@/context/TimelineContext";
import Image from "next/image";
import React, { useContext } from "react";

const Timeline = () => {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error("useTimeline must be used within TimelineProvider");
  }
  const { timeline } = context;
  console.log(timeline);

  return (
    <div className="container mx-auto mt-10">
      {timeline.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 p-4 shadow-md rounded-lg mb-4"
        >
          <Image
            src={item.icon}
            alt={item.name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full"
          />
          <h3 className="text-lg font-medium">
            {" "}
            <span className="text-md font-bold">{item.label}</span> with{" "}
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
