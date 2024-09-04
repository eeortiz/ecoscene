import { z } from 'zod'

export const CampaignSchema = z.object({
  campaingId: z.number().optional(),
  campaingName: z.string().optional(),
  isActive: z.boolean().optional(),
})

export type CampaignSchema = z.infer<typeof CampaignSchema>

export const AgentsfSchema = z.object({
  email: z.string().email().min(1, 'Por favor ingrese el correo'),
  paswoord: z.string().min(1, 'Por favor ingrese la contraseña'),
})

export type listOfAgentsValues = z.infer<typeof AgentsfSchema>
