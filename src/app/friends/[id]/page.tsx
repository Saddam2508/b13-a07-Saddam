import FriendDetails from "@/components/friends/FriendDetails";
import { Friend } from "@/components/friends/FriendList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Friend Details | b13-a07-saddam",
};

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const data = await fetch("https://b13-a07-saddam.vercel.app/friends.json");
  const friends: Friend[] = await data.json();
  const friend = friends.find((f) => f.id === parseInt(id));
  if (!friend) {
    return <div>Friend not found</div>;
  }
  return (
    <>
      <FriendDetails friend={friend} />
    </>
  );
};

export default page;
