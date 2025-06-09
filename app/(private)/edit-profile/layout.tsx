import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Profile Page",
  description: "Edit Profile page of the application",
};

export default function EditProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
