import FriendCard from "./FriendCard";

export interface Friend {
  id: number;
  name: string;
  picture: string;
  email: string;
  days_since_contact: number;
  status: string;
  tags: string[];
  bio: string;
  goal: string;
  next_due_date: string;
}

const FriendList = async () => {
  const data = await fetch("http://localhost:3000//friends.json");
  const friends: Friend[] = await data.json();

  return (
    <div className="my-20">
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-bold">
          Friends to keep close in your life
        </h2>
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn bg-green-800 text-white">
          <span>+</span>
          <span>Add a Friend</span>
        </button>
      </div>
      <div>
        <h2 className="text-3xl font-bold">Your Friends</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendList;
