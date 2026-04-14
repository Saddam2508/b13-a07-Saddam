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
    <div className="my-20 *:container *:mx-auto px-4">
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
        <div className="text-center sm:text-left mt-3 sm:mt-0">
          <h2 className=" text-xl sm:text-3xl font-bold">Your Friends</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          <div className=" flex flex-col p-8 rounded-lg shadow-md justify-center items-center border border-gray-50">
            <span className="text-xl font-bold">{friends.length}</span>
            <span>Total Friends</span>
          </div>
          <div className=" flex flex-col p-8 rounded-lg shadow-md justify-center items-center border border-gray-50">
            <span className="text-xl font-bold">
              {friends.filter((friend) => friend.status === "on-track").length}
            </span>
            <span>On Track</span>
          </div>
          <div className=" flex flex-col p-8 rounded-lg shadow-md justify-center items-center border border-gray-50">
            <span className="text-xl font-bold">
              {friends.filter((friend) => friend.status === "overdue").length}
            </span>
            <span>Need Attention</span>
          </div>
          <div className=" flex flex-col p-8 rounded-lg shadow-md justify-center items-center border border-gray-50">
            <span className="text-xl font-bold">15</span>
            <span>Interactions This Month</span>
          </div>
        </div>
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
