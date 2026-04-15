"use client";
import { TimelineContext } from "@/context/TimelineContext";
import Image from "next/image";
import React, { useContext,  useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Timeline = () => {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error("useTimeline must be used within TimelineProvider");
  }
  const { timeline } = context;

  const [activeFilter, setActiveFilter] = useState("all");
const [search, setSearch] = useState("")
const [sortOrder, setSortOrder] = useState("newest")

  const handleFilter = (action: string) => {
    setActiveFilter(action);
  };

const handleSearch = (inputValue: string)=>{
setSearch(inputValue)
}


   const filtered = timeline
  .filter(
      (t) => activeFilter === "all"? true: t.label.toLowerCase() === activeFilter.toLowerCase(),
    )

   .filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()))
  .sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    return sortOrder === "newest"
      ? dateB - dateA  
      : dateA - dateB;  
  })


const timeAgo = (date: string)=>{
  const now = new Date().getTime()
  const past = new Date(date).getTime()
  const diff = now -past
  const seconds = Math.floor(diff/1000)
  const minutes = Math.floor(seconds/60)
  const hours = Math.floor(minutes/60)
  const days = Math.floor(hours/60)
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  const formattedDate = new Date(date).toLocaleDateString("en-US", options);


  if(seconds < 60) return `just now (${formattedDate})` 
  if(minutes < 60) return `${minutes} min ago (${formattedDate})`
  if(hours < 24) return `${hours} hr ago (${formattedDate})`
  return `${days} day ago (${formattedDate})`
}

  return (
    <div className="container mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-5 text-center sm:text-start">
        Timeline
      </h2>
      <div className="flex justify-center items-center">
        <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" onInput={(e)=>handleSearch((e.target as HTMLInputElement).value)} />
</label>
      </div>
      <div className="mb-5 text-center sm:text-start">
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
          <li>
            <a onClick={() => setSortOrder("newest")}>Newest</a>
          </li>
          <li>
            <a onClick={() => setSortOrder("oldest")}>Oldest</a>
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
              <p className="text-sm text-gray-500">{timeAgo(item.date)}</p>
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
