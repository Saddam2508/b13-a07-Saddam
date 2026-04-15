"use client";

import { Timeline, TimelineContext } from "@/context/TimelineContext";
import React, { useContext, useState } from "react";

import { Friend } from "../friends/FriendList";
import Image from "next/image";
import { toast } from "react-toastify";

const TimelineButton = ({ friend }: { friend: Friend }) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  type ActionItem = {
    label: string;
    icon: string;
  };

  const actions: ActionItem[] = [
    {
      label: "Call",
      icon: "https://i.ibb.co/B5zTp3jd/call.png",
    },
    {
      label: "Text",
      icon: "https://i.ibb.co/qLVnMF24/text.png",
    },
    {
      label: "Video",
      icon: "https://i.ibb.co/YBfXQxwn/video.png",
    },
  ];

  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error("useTimeline must be used within TimelineProvider");
  }
  const { setTimeLine } = context;

  const handleCall = (icons: string, labels: string) => {
    const t: Timeline = {
      id: friend.id,
      name: friend.name,
      label: labels,
      icon: icons,
    };
    setTimeLine((prev) => [...prev, t]);
    setActiveButton(labels);
    toast.success(`${labels} action added to timeline for ${friend.name}`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className=" flex flex-col sm:flex-row justify-between items-center p-6 shadow-md rounded-lg gap-3">
      {actions.map((action, idx) => (
        <button
          key={idx}
          onClick={() => handleCall(action.icon, action.label)}
          className={`btn flex-col px-12 py-15 ${activeButton === action.label ? "bg-green-800 text-white" : ""}`}
        >
          <Image src={action.icon} alt={action.label} width={40} height={40} />
          <span className="text-xl"> {action.label} </span>
        </button>
      ))}
    </div>
  );
};

export default TimelineButton;
