import Image from "next/image";
import { Friend } from "./FriendList";
import Link from "next/link";

interface FriendCardProps {
  friend: Friend;
}

const FriendCard = ({ friend }: FriendCardProps) => {
  const getTag = (tags: string[]) => {
    return tags.map((tag, i) => (
      <button key={i} className=" py-1 px-1 text-xs bg-green-300 rounded-full">
        {tag.toUpperCase()}
      </button>
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-track":
        return "btn bg-black";
      case "overdue":
        return " btn bg-red-500";
      case "almost due":
        return " btn bg-amber-500";
      default:
        return "btn";
    }
  };

  return (
    <Link href={`/friends/${friend.id}`} className="card bg-base-100 shadow-sm">
      <figure className="px-10 pt-10">
        <Image
          src={friend.picture}
          alt={friend.name}
          width={50}
          height={50}
          className="rounded-full w-24 h-24 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {friend.name} </h2>
        <p>{friend.days_since_contact}d ago</p>
        <div className="card-actions">{getTag(friend.tags)}</div>
        <div>
          <button
            className={`rounded-full text-white text-md ${getStatusColor(friend.status)} mt-4`}
          >
            {friend.status}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
