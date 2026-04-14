import TimelineProvider from "@/context/TimelineContext";
import React, { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return <TimelineProvider>{children}</TimelineProvider>;
};

export default Providers;
