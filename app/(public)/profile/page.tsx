import { TUserType } from "@/app/api/profile/type";
import { Card } from "@/components/ui/card";
import { PencilIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const Profile = async () => {
  const data = await fetch(`${process.env.URL}/api/profile`, {
    cache: "no-store",
  });

  const user: TUserType = await data.json();

  if (!user) {
    return {
      notFound: true,
    };
  }

  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-md shadow-lg">
        <table className="w-11/12 m-auto">
          <tbody>
            <tr>
              <td></td>
              <td className="flex justify-end">
                <Link href="edit-profile">
                  <PencilIcon className="w-4 h-4" />
                </Link>
              </td>
            </tr>
            <tr>
              <td className="align-top text-right">Name:</td>
              <td className="pl-4">{user?.name}</td>
            </tr>
            <tr>
              <td className="align-top text-right">Bio:</td>
              <td className="pl-4">{user.bio}</td>
            </tr>
            <tr>
              <td className="align-top text-right">Email:</td>
              <td className="pl-4">{user?.email}</td>
            </tr>
            <tr>
              <td className="align-top text-right">Phone:</td>
              <td className="pl-4">{user?.phone}</td>
            </tr>
            <tr>
              <td className="align-top text-right">Location:</td>
              <td className="pl-4">{user?.location}</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Profile;
