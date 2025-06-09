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
  const updatedUser: TUserType = {
    ...dummyUser,
    ...data, // Merge the existing user data with the new data
  };

  return NextResponse.json(updatedUser);
}
