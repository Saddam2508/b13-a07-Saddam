import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-green-800 py-15">
      <div className="text-center space-y-3 text-white">
        <h2 className="text-7xl font-bold ">KeenKeeper</h2>
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </div>
      <div className="text-center mt-5 text-white">
        <p className="text-2xl font-bold">Social Links</p>
        <div className="flex justify-center space-x-4 mt-2 text-2xl">
          <span className="bg-white rounded-full p-3 text-black cursor-pointer">
            <FaInstagram />
          </span>
          <span className="bg-white rounded-full p-3 text-black cursor-pointer">
            <FaFacebook />
          </span>
          <span className="bg-white rounded-full p-3 text-black cursor-pointer">
            <FaTwitter />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
