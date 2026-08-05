import { z } from "zod";

export const OverrideSchema = z.object({
  category: z.string().min(1),
});

export type OverrideInput = z.infer<typeof OverrideSchema>;