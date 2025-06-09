import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Profile Page",
  description: "Profile page of the application",
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
