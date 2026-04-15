import Timeline from "@/components/timeline/Timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline | b13-a07-saddam",
};

const page = () => {
  return (
    <div className="container mx-auto">
      <Timeline />
    </div>
  );
};

export default page;
