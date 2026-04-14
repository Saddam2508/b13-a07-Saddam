import { HiOutlineBellSnooze } from "react-icons/hi2";
import FriendDetailCard from "./FriendDetailCard";
import { Friend } from "./FriendList";
import {
  RiArchiveLine,
  RiDeleteBin6Line,
  RiMessage2Line,
} from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";
import { PiVideoCameraLight } from "react-icons/pi";

const FriendDetails = ({ friend }: { friend: Friend }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="container mx-auto grid grid-cols-2 my-20 gap-5">
      <div className="detail-left flex flex-col gap-5">
        <FriendDetailCard friend={friend} />
        <button className="btn bg-base-100 shadow-md gap-2  p-10 font-bold text-lg cursor-pointer">
          <span>
            {" "}
            <HiOutlineBellSnooze />
          </span>
          <span>Snooze 2 weeks</span>
        </button>
        <button className="btn bg-base-100 shadow-md gap-2  p-10 font-bold text-lg cursor-pointer">
          <span>
            {" "}
            <RiArchiveLine />
          </span>
          <span>Archive</span>
        </button>
        <button className="btn bg-base-100 shadow-md gap-2  p-10 font-bold text-lg cursor-pointer">
          <span>
            {" "}
            <RiDeleteBin6Line className="text-red-700 font-bold" />
          </span>
          <span className="text-red-700">Delete</span>
        </button>
      </div>

      <div className="detail-right flex flex-col gap-20">
        <div className="grid grid-cols-3 gap-5">
          <div className="p-6 shadow-md rounded-lg  flex flex-col justify-center items-center gap-2">
            <span className="text-2xl font-bold">62</span>
            <span>Days Since Contact</span>
          </div>
          <div className="p-6 shadow-md rounded-lg flex flex-col justify-center items-center gap-3">
            <span className="text-2xl font-bold"> {friend.goal} </span>
            <span>Goal (Days)</span>
          </div>
          <div className="p-6 shadow-md rounded-lg flex flex-col justify-center items-center gap-3">
            <span className="text-2xl font-bold">
              {formatDate(friend.next_due_date)}
            </span>
            <span>Next Due</span>
          </div>
        </div>
        <div className="flex justify-between p-10 shadow-md rounded-lg">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold">Relationship Goal</h2>
            <p>
              Connect every <span className="font-bold">30 days</span>
            </p>
          </div>
          <div>
            <button className="btn">Edit</button>
          </div>
        </div>
        <div className="p-2">
          <h2 className="text-xl font-bold my-3 px-3">Quick Check-In</h2>
          <div className="flex justify-between p-6 shadow-md rounded-lg">
            <button className="btn flex-col px-12 py-15">
              <span className="text-2xl">
                {" "}
                <LuPhoneCall />{" "}
              </span>
              <span className="text-xl">Call</span>
            </button>
            <button className="btn flex-col px-12 py-15">
              <span className="text-2xl">
                {" "}
                <RiMessage2Line />{" "}
              </span>
              <span className="text-xl">Text</span>
            </button>
            <button className="btn flex-col px-12 py-15">
              <span className="text-2xl">
                {" "}
                <PiVideoCameraLight />{" "}
              </span>
              <span className="text-xl">Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
