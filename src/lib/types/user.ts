import { z } from 'zod';

// Base User schema
export const userSchema = z.object({
  email: z.string().email(),
});

// User Display schema (extends base user with additional fields)
export const userDisplaySchema = userSchema.extend({
  createdAt: z.string(),
  id: z.number().int().positive(),
  firstName: z.string(),
  lastName: z.string(),
  updatedAt: z.string(),
});

// User Update schema (all fields optional)
// export const userUpdateSchema = z.object({
//   firstName: z.string().max(255).optional().default(''),
//   lastName: z.string().max(255).optional().default(''),
//   password: z.string().optional().default(''),
// });
export const userUpdateSchema = z.object({
  firstName: z
    .string()
    .refine(
      (firstName) => {
        if (firstName === '') return true; // Allow empty password (not updating)
        return firstName.trim().length <= 255;
      },
      {
        message: 'First Name cannot be longer than 255 characters',
      },
    )
    .optional()
    .default(''),
  lastName: z
    .string()
    .min(0)
    .refine(
      (lastName) => {
        if (lastName === '') return true; // Allow empty password (not updating)
        return lastName.trim().length <= 255;
      },
      {
        message: 'Last Name cannot be longer than 255 characters',
      },
    )
    .optional()
    .default(''),
  password: z
    .string()
    .max(255, { message: 'Password must have a maximum of 255 characters' })
    .refine(
      (password) => {
        if (password === '') return true; // Allow empty password (not updating)
        return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
      },
      {
        message:
          'Password must be at least 8 characters long, include at least 1 capital letter and 1 number',
      },
    )
    .optional()
    .default(''),
});

export const userLoginSchema = z.object({
  email: z
    .string()
    .min(3, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
});

// Infer TypeScript types from Zod schemas
export type User = z.infer<typeof userSchema>;
export type UserDisplay = z.infer<typeof userDisplaySchema>;
export type UserLogin = z.infer<typeof userLoginSchema>;
export type UserUpdate = z.infer<typeof userUpdateSchema>;
