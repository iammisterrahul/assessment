"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useForm } from "react-hook-form";
import { formSchema, FormSchemaType } from "./validation/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function EditProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormSchemaType) => {
    try {
      const response = await fetch(`${process.env.URL}/api/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const result = await response.json();
      console.log("Profile updated successfully:", result);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div>
      <Card className="w-full max-w-md shadow-lg m-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit);
          }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col px-2 gap-1">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="border p-2 rounded"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div className="flex flex-col px-2 gap-1">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              name="bio"
              placeholder="Enter your bio"
              className="border p-2 rounded"
            />
            {errors.bio && <p>{errors.bio.message}</p>}
          </div>
          <div className="flex flex-col px-2 gap-1">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border p-2 rounded"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="flex flex-col px-2 gap-1">
            <Label htmlFor="phone">Phone</Label>
            <Input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className="border p-2 rounded"
            />
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>
          <div className="flex flex-col px-2 gap-1">
            <Label htmlFor="location">Location</Label>
            <Input
              type="text"
              name="location"
              placeholder="Enter your location"
              className="border p-2 rounded"
            />
            {errors.location && <p>{errors.location.message}</p>}
          </div>
          <div className="flex flex-col px-2">
            <Button
              type="submit"
              className="text-white p-2 rounded transition-colors"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
