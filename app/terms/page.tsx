import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const sections = [
  {
    title: '1. Uso da plataforma',
    text: 'O Dodo ajuda negócios a organizar agendamentos, clientes, serviços e cobranças. Ao usar a plataforma, você se compromete a fornecer informações verdadeiras e manter o acesso à sua conta protegido.',
  },
  {
    title: '2. Conta e responsabilidades',
    text: 'Você é responsável pelas informações cadastradas, pelos atendimentos criados e pelo uso correto dos recursos disponíveis. Não é permitido utilizar o Dodo para atividades ilegais, abusivas ou que prejudiquem terceiros.',
  },
  {
    title: '3. Planos e pagamentos',
    text: 'Recursos gratuitos e pagos podem variar conforme o plano contratado. Quando houver cobrança, os valores, prazos e condições serão apresentados antes da confirmação do uso.',
  },
  {
    title: '4. Alterações no serviço',
    text: 'Podemos melhorar, remover ou ajustar funcionalidades para manter a plataforma estável e útil. Mudanças relevantes serão comunicadas pelos canais disponíveis.',
  },
  {
    title: '5. Encerramento',
    text: 'Você pode parar de usar o Dodo a qualquer momento. Também podemos suspender contas que violem estes termos ou coloquem a segurança da plataforma em risco.',
  },
]

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/" className="text-sm font-medium">
        <ArrowLeft size={14} />
      </Link>

      <header className="mt-10 border-b border-zinc-200 pb-10 dark:border-zinc-800">
        <p className="text-xs font-semibold tracking-widest text-orange-500">
          LEGAL
        </p>
        <h1 className="mt-3 text-4xl font-semibold -tracking-wider font-title">
          Termos de uso
        </h1>
        <p className="mt-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Estes termos explicam as condições gerais para usar o Dodo. Este texto
          é um modelo inicial e deve ser revisado juridicamente antes da
          publicação final.
        </p>
      </header>

      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold -tracking-wide">
              {section.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              {section.text}
            </p>
          </section>
        ))}
      </div>
    </main>
  )
}
