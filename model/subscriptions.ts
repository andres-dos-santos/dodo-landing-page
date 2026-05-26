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

type SubscriptionCookies = {
  accessToken?: string
  refreshToken?: string
}

type HeadersWithSetCookie = Headers & {
  getSetCookie?: () => string[]
}

function splitSetCookieHeader(header: string) {
  return header.split(/,(?=\s*[^;,=]+=[^;,]*)/)
}

function getSubscriptionCookies(headers: Headers) {
  const setCookieHeaders =
    (headers as HeadersWithSetCookie).getSetCookie?.() ??
    splitSetCookieHeader(headers.get('set-cookie') ?? '')

  return setCookieHeaders.reduce<SubscriptionCookies>((cookies, cookie) => {
    const [nameValue] = cookie.trim().split(';')
    const [name, value] = nameValue.split('=')

    if (name === 'accessToken') {
      cookies.accessToken = value
    }

    if (name === 'refreshToken') {
      cookies.refreshToken = value
    }

    return cookies
  }, {})
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

    return {
      content: body.data?.content,
      cookies: getSubscriptionCookies(response.headers),
    }
  }
}
