import { NextResponse } from "next/server";
import { TUserType } from "./type";

const dummyUser: TUserType = {
  name: "Rahul Rajan",
  bio: "A passionate developer with a love for coding and technology.",
  email: "vattamparambilrahulrajan@gmail.com",
  phone: "8469666988",
  location: "Kerala, India",
};

export async function GET() {
  return NextResponse.json(dummyUser);
}

export async function PUT(request: Request) {
  const data = await request.json();

  // Here you would typically update the user in your database
  // For this example, we will just return the updated user data
  const updatedUser: TUserType = {
    ...dummyUser,
    ...data,
  };

  return NextResponse.json(updatedUser);
}
