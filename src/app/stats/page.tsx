import TimelineChart from "@/components/timeline/TimelineChart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Friendship Analytics | b13-a07-saddam",
};

const page = () => {
  return (
    <div className="container mx-auto ">
      <h2 className="text-3xl font-bold text-center sm:text-start my-3">
        Friendship Analytics
      </h2>

      <div className="text-center flex items-center justify-center h-full rounded-lg shadow-md p-4 bg-white m-8 ">
        {" "}
        <TimelineChart />
      </div>
    </div>
  );
};

export default page;
