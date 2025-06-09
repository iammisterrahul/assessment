"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { formSchema, FormSchemaType } from "./validation/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { TUserType } from "@/app/api/profile/type";
import { useRouter } from "next/navigation";
import { useToastStore } from "@/lib/store";
import { toast } from "sonner";

export default function EditProfile() {
  const [profile, setProfile] = React.useState<TUserType | null>(null);
  const router = useRouter();
  //   const profile: TUserType = await data.json();
  const {
    register,
    trigger,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: profile?.name || "",
      bio: profile?.bio || "",
      email: profile?.email || "",
      phone: profile?.phone || "",
      location: profile?.location || "",
    },
  });

  const onSubmit = async (data: FormSchemaType) => {
    try {
      const response = await fetch(`/api/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      // const result = await response.json();
      // console.log("Profile updated successfully:", result);
      useToastStore.getState().showToast({
        title: "Success",
        description: "Your profile has been updated successfully!",
      });
      router.push("/profile"); // Redirect to profile page after successful update
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  useEffect(() => {
    (async () => {
      const data = await fetch(`/api/profile`);
      const user: TUserType = await data.json();
      if (!user) {
        console.error("User not found");
        setProfile(null);
      } else {
        setProfile(user);
        setValue("name", user.name);
        setValue("bio", user.bio);
        setValue("email", user.email);
        setValue("phone", user.phone);
        setValue("location", user.location);
      }
    })();
  }, []);

  return (
    <div>
      <Card className="w-full max-w-md shadow-lg m-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col px-2 gap-1">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              defaultValue={profile?.name}
              {...register("name")}
              onBlur={() => {
                trigger("name");
              }}
              placeholder="Enter your name"
              className="border p-2 rounded"
            />
            {errors.name && (
              <p className="text-[10px] text-red-700">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col px-2 gap-1">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              defaultValue={profile?.bio}
              {...register("bio")}
              onBlur={() => {
                trigger("bio");
              }}
              placeholder="Enter your bio"
              className="border p-2 rounded"
            />
            {errors.bio && (
              <p className="text-[10px] text-red-700">{errors.bio.message}</p>
            )}
          </div>
          <div className="flex flex-col px-2 gap-1">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              defaultValue={profile?.email}
              {...register("email")}
              onBlur={() => {
                trigger("email");
              }}
              placeholder="Enter your email"
              className="border p-2 rounded"
            />
            {errors.email && (
              <p className="text-[10px] text-red-700">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col px-2 gap-1">
            <Label htmlFor="phone">Phone</Label>
            <Input
              type="tel"
              defaultValue={profile?.phone}
              {...register("phone")}
              onBlur={() => {
                trigger("phone");
              }}
              placeholder="Enter your phone number"
              className="border p-2 rounded"
            />
            {errors.phone && (
              <p className="text-[10px] text-red-700">{errors.phone.message}</p>
            )}
          </div>
          <div className="flex flex-col px-2 gap-1">
            <Label htmlFor="location">Location</Label>
            <Input
              type="text"
              defaultValue={profile?.location}
              {...register("location")}
              onBlur={() => {
                trigger("location");
              }}
              placeholder="Enter your location"
              className="border p-2 rounded"
            />
            {errors.location && (
              <p className="text-[10px] text-red-700">
                {errors.location.message}
              </p>
            )}
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
