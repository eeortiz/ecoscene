import type { z } from 'zod'

import { type Roles } from '@/features/common/consts'
import { AuthUserSchema, UserCreateSchema } from '../components/ui/shemas'

export type RoleValues = (typeof Roles)[keyof typeof Roles]
export type RoleKeys = keyof typeof Roles

export type AuthUser = z.infer<typeof AuthUserSchema>
export type UserCreate = z.infer<typeof UserCreateSchema>

export interface AuthValues {
  username: string
  password: string
}
