export default async function SubscriptionPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { token } = await searchParams // token com tempo de expiração curto

  return (
    <div>
      <h1>Aqui conecta com o Stripe por exemplo {token}</h1>
    </div>
  )
}
