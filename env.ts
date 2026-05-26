import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.preprocess(
    (value) => (value === '' ? undefined : value),
    z.string().url().default('http://localhost:8080/api/v1'),
  ),
})

const parsedEnv = envSchema.safeParse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
})

if (!parsedEnv.success) {
  throw new Error(`Invalid environment variables: ${parsedEnv.error.message}`)
}

export const env = parsedEnv.data
