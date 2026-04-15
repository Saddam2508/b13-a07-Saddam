"use client";
import { TimelineContext } from "@/context/TimelineContext";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Timeline = () => {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error("useTimeline must be used within TimelineProvider");
  }
  const { timeline } = context;
  const [filtered, setFiltered] = useState(timeline);
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilter = (action: string) => {
    setActiveFilter(action);

    if (action === "all") {
      setFiltered(timeline);
      return;
    }

    const filteredTimeline = timeline.filter(
      (t) => t.label.toLowerCase() === action.toLowerCase(),
    );

    setFiltered(filteredTimeline);
  };

  const getCurrentDate = () => {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
    return new Date().toLocaleDateString("en-US", options);
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-5">Timeline</h2>
      <div className="mb-5">
        <button
          className="btn"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" }}
        >
          Filter timeline{" "}
          <span>
            <IoIosArrowDown />
          </span>
        </button>

        <ul
          className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
        >
          <li>
            <a onClick={() => handleFilter("all")}>All</a>
          </li>
          <li>
            <a onClick={() => handleFilter("call")}>Call</a>
          </li>
          <li>
            <a onClick={() => handleFilter("text")}>Text</a>
          </li>
          <li>
            <a onClick={() => handleFilter("video")}>Video</a>
          </li>
        </ul>
      </div>
      {filtered.length > 0 ? (
        filtered.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 shadow-md rounded-lg mb-6"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-lg font-medium">
                {" "}
                <span className="text-md font-bold">
                  {item.label}
                </span> with {item.name}
              </h3>
              <p className="text-sm text-gray-500">{getCurrentDate()}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center"> No timeline items found.</p>
      )}
    </div>
  );
};

export default Timeline;
