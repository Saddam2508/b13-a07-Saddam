"use client";

import { Timeline, TimelineContext } from "@/context/TimelineContext";
import React, { useContext } from "react";

import { Friend } from "../friends/FriendList";
import Image from "next/image";

const TimelineButton = ({ friend }: { friend: Friend }) => {
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
      icon: "https://www.flaticon.com/free-icon/video_8407947",
    },
  ];

  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error("useTimeline must be used within TimelineProvider");
  }
  const { setTimeLine } = context;

  const handleCall = (icons: string, labels: string) => {
    // const existTimeline = timeline.find((t) => t.id === friend.id);
    const t: Timeline = {
      id: friend.id,
      name: friend.name,
      label: labels,
      icon: icons,
    };
    setTimeLine((prev) => [...prev, t]);
    // if (!existTimeline) {
    //   const t: Timeline = {
    //     id: friend.id,
    //     name: friend.name,
    //     label: labels,
    //     icon: icons,
    //   };
    //   setTimeLine((prev) => [...prev, t]);
    // } else {
    //   alert("Timeline already exists for this friend.");
    // }
  };

  return (
    <div className="flex justify-between p-6 shadow-md rounded-lg">
      {actions.map((action, idx) => (
        <button
          key={idx}
          onClick={() => handleCall(action.icon, action.label)}
          className="btn flex-col px-12 py-15"
        >
          <Image src={action.icon} alt={action.label} width={40} height={40} />
          <span className="text-xl"> {action.label} </span>
        </button>
      ))}
    </div>
  );
};

export default TimelineButton;
