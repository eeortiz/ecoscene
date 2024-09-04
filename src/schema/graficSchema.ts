import { z } from 'zod'

export const FormoReportShema = z.object({
  productOne: z.number().min(1, 'Campo es requerido').or(z.string()),
  productTwo: z.number().min(1, 'Campo es requerido').or(z.string()),
  productThree: z.number().min(1, 'Campo es requerido').or(z.string()),
  productFour: z.number().min(1, 'Campo es requerido').or(z.string()),
})

export type valueInformationsInfo = z.infer<typeof FormoReportShema>
