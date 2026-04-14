import FriendDetails from "@/components/friends/FriendDetails";
import { Friend } from "@/components/friends/FriendList";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const data = await fetch("http://localhost:3000//friends.json");
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
