import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters"),
  bio: z
    .string()
    .min(20, "Bio must be at least 20 characters")
    .max(160, "Bio must be at most 160 characters"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  location: z.string().min(2, "Location must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

export type FormSchemaType = z.infer<typeof formSchema>;
