import {z }from "zod";
export const contactSchema = z.object({
    name: z.string().min(1,{message:"Name is required"}),
    phone: z
    .string()
    .regex(/^\d+$/, { message: "Phone must contain only digits" })
    .min(10, { message: "Phone must be at least 10 digits" }),
    email: z.string().email({message:"Email is required"}),
    message: z.string().min(1,{message:"Message is required"}),
  });
export type ContactFormType=z.infer<typeof contactSchema>
