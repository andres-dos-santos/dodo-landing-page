import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const sections = [
  {
    title: '1. Dados que coletamos',
    text: 'Podemos coletar dados informados por você, como nome, telefone, e-mail, serviços cadastrados, clientes, agendamentos e informações necessárias para operar sua conta.',
  },
  {
    title: '2. Como usamos os dados',
    text: 'Usamos os dados para entregar as funcionalidades do Dodo, organizar sua operação, melhorar a experiência, oferecer suporte e manter a segurança da plataforma.',
  },
  {
    title: '3. Compartilhamento',
    text: 'Não vendemos seus dados pessoais. Informações podem ser compartilhadas apenas com fornecedores necessários para operar o serviço ou quando houver obrigação legal.',
  },
  {
    title: '4. Segurança',
    text: 'Adotamos medidas técnicas e organizacionais para proteger as informações, mas nenhum sistema é totalmente imune a riscos. Recomendamos manter suas credenciais em segurança.',
  },
  {
    title: '5. Seus direitos',
    text: 'Você pode solicitar acesso, correção ou exclusão dos seus dados, conforme a legislação aplicável. Para isso, entre em contato pelos canais de suporte do Dodo.',
  },
]

export default function PrivacyPage() {
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
          Política de privacidade
        </h1>
        <p className="mt-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Esta política descreve como o Dodo trata informações pessoais. Este
          texto é um modelo inicial e deve ser revisado juridicamente antes da
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
