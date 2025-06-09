import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="text-lg font-bold">MyApp</div>
        <ul className="flex space-x-4 justify-center items-center">
          <Link href={"/"}>
            <li className="hover:underline">Home</li>
          </Link>
          <Link href="/profile">
            <li className="hover:underline">Profile</li>
          </Link>
          <Link href="/settings">
            <li className="hover:underline">Settings</li>
          </Link>
          <Link href="/">
            <li>
              <Image
                src="/profile.jpeg"
                alt="profile-image"
                width="50"
                height="50"
                className="rounded-full border border-solid border-gray-300 dark:border-gray-700 transition-colors hover:border-gray-400 dark:hover:border-gray-600"
              />
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
