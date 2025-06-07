import z from "zod";

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
})

export const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3, "Password must be at least 3 characters long"),
    username: z.string()
        .min(3, "Username must be at least 3 characters long")
        .max(63, "Username must be at most 63 characters long")
        .regex(/^[a-z0-9][a-z0-9-]*[a-z0-9]$/, "Username can only contain letters, numbers, and hyphens, and must begin and end with a letter or number.")
        .refine(
            (val) => !val.includes("--"),
            "Username cannot contain double hyphens."
        )
        .transform((val) => val.toLowerCase()),
});