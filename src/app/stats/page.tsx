import TimelineChart from "@/components/timeline/TimelineChart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chart | b13-a07-saddam",
};

const page = () => {
  return (
    <div className="container mx-auto flex justify-center">
      <TimelineChart />
    </div>
  );
};

export default page;
