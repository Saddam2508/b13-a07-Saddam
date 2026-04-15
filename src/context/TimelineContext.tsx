"use client";

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export interface Timeline {
  id: number;
  name: string;
  label: string;
  icon: string;
  date: string
}

interface TimelineContextType {
  timeline: Timeline[];
  setTimeLine: Dispatch<SetStateAction<Timeline[]>>;
}

export const TimelineContext = createContext<TimelineContextType | null>(null);

const TimelineProvider = ({ children }: { children: ReactNode }) => {
  const [timeline, setTimeLine] = useState<Timeline[]>([]);

  const data: TimelineContextType = {
    timeline,
    setTimeLine,
  };
  return (
    <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
  );
};

export default TimelineProvider;
