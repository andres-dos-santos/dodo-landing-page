import { env } from '@/env'

export type ConsumeTemporarySubscriptionTokenResponse = {
  session: {
    access_token: string
    refresh_token: string
    refresh_token_expiry: number
    auth_token_expiry: number
  }
  user: {
    id: string
    email: string
    full_name: string
  }
  plan_id: number
}

type ApiResponse<T> = {
  data?: {
    content: T
  }
  error?: {
    message: string
  }
}

export class SubscriptionModel {
  async consumeTemporarySubscriptionToken(token: string) {
    const response = await fetch(
      `${env.NEXT_PUBLIC_API_URL}/subscription/consume-temporary-token`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      },
    )

    const body =
      (await response.json()) as ApiResponse<ConsumeTemporarySubscriptionTokenResponse>

    if (!response.ok) {
      throw new Error(
        body.error?.message ?? 'Failed to consume subscription token.',
      )
    }

    return body.data?.content
  }
}
