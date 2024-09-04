import { z } from 'zod'

export const AuthUserSchema = z.object({
  token: z.string(),
  refreshToken: z.string(),
  userId: z.string(),
  roleName: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  roleId: z.string()
})
