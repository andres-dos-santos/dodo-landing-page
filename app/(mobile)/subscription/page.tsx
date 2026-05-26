import { SubscriptionModel } from '@/model/subscriptions'

export default async function SubscriptionPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { token } = await searchParams // token com tempo de expiração curto
  const subscriptionToken = Array.isArray(token) ? token[0] : token

  const subscriptionModel = new SubscriptionModel()

  const subscription = subscriptionToken
    ? await subscriptionModel.consumeTemporarySubscriptionToken(
        subscriptionToken,
      )
    : null

  return (
    <div>
      <h1>
        Aqui conecta com o Stripe por exemplo{' '}
        {subscription?.content?.plan_id ?? token}
      </h1>
      <pre>{JSON.stringify(subscription?.cookies ?? {}, null, 2)}</pre>
    </div>
  )
}
