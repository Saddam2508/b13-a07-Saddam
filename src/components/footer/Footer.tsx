"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="bg-green-800 py-15 px-4 sm:px-0"
    >
      <div className="text-center space-y-3 text-white">
        <h2 className=" text-4xl sm:text-7xl font-bold ">KeenKeeper</h2>
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
      <div className="container mx-auto flex flex-col-reverse sm:flex-row justify-between mt-5 text-white gap-3 text-center sm:text-start">
        <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
        <div className=" flex flex-col sm:flex-row gap-5">
          <Link href="/privacy-policy" className="text-white hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-white hover:underline">
            Terms of Service
          </Link>
          <Link href="/cookies" className="text-white hover:underline">
            Cookies
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
