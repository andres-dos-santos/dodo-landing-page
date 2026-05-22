import {
  CalendarCheck,
  Check,
  CreditCard,
  Ellipsis,
  HelpCircle,
  MessageCircle,
  Star,
  Users,
} from 'lucide-react'
import Link from 'next/link'

const solutions = [
  {
    icon: CalendarCheck,
    title: 'Agenda inteligente',
    description:
      'Organize horários, serviços e disponibilidade em uma rotina simples de acompanhar.',
  },
  {
    icon: Users,
    title: 'Clientes no centro',
    description:
      'Mantenha histórico, contatos e preferências sempre prontos para o próximo atendimento.',
  },
  {
    icon: CreditCard,
    title: 'Cobranças integradas',
    description:
      'Controle pagamentos, valores e status sem depender de planilhas soltas.',
  },
]

const faqs = [
  {
    question: 'O Dodo funciona para qualquer tipo de serviço?',
    answer:
      'Sim. Ele foi pensado para negócios com agenda, atendimento recorrente e cobrança por serviço.',
  },
  {
    question: 'Preciso instalar algo para começar?',
    answer:
      'Não. Você cria sua conta, configura seus serviços e já pode organizar seus agendamentos.',
  },
  {
    question: 'Posso usar pelo celular?',
    answer:
      'Sim. A experiência foi desenhada para acompanhar a operação direto do celular.',
  },
]

export default function Home() {
  return (
    <div className="">
      <header className="h-20 flex items-center justify-between px-10">
        <div className="flex items-center w-56">
          {/* <div className="h-10 w-10"></div> */}
          <p className="text-sm -tracking-wider">/ dodoapp.com</p>
        </div>

        <nav className="flex flex-1 items-center justify-center">
          <ul className="flex items-center gap-8">
            <li className="text-sm dark:text-zinc-200 hover:dark:text-white">
              <a href="#solucoes">Soluções</a>
            </li>
            <li className="text-sm dark:text-zinc-200 hover:dark:text-white">
              <a href="#precos">Preços</a>
            </li>
            <li className="text-sm dark:text-zinc-200 hover:dark:text-white">
              <a href="#faq">FAQ</a>
            </li>
            <li className="text-sm dark:text-zinc-200 hover:dark:text-white">
              <a href="#suporte">Suporte</a>
            </li>
          </ul>
        </nav>

        <div className="w-56 flex">
          <Link href="/appointment" className="ml-auto">
            <Ellipsis />
          </Link>
        </div>
      </header>

      <main>
        <section className="pt-10 mx-auto min-h-[calc(100vh-5rem)] max-w-4xl text-center px-6">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full dark:text-white text-zinc-900 px-3 py-2 text-xs font-semibold">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-zinc-100 dark:bg-zinc-800">
              <Star size={14} fill="currentColor" />
            </span>
            5.0 over 24.5K + Reviews
          </div>

          <h3 className="text-6xl -tracking-wider font-semibold text-center text-balance font-title">
            Agendamentos, clientes e pagamentos
          </h3>

          <p className="text-[15px] my-10">
            Gerencie sua agenda, clientes, serviços e cobranças sem complicação.
          </p>

          <div className="flex items-center justify-center gap-4 mb-10">
            <button type="button" className="bg-white h-12 rounded-full px-10">
              <p className="text-xs text-zinc-900 font-medium -tracking-wide">
                Comece, é grátis
              </p>
            </button>
            <button
              type="button"
              className="border border-zinc-500 h-12 rounded-full px-10"
            >
              <p className="text-xs font-medium -tracking-wide">Download app</p>
            </button>
          </div>

          <div className="dark:bg-zinc-900 bg-zinc-200 rounded-4xl h-96"></div>
        </section>

        <section id="solucoes" className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm text-orange-500">Soluções</p>
            <h2 className="mt-3 text-4xl font-semibold -tracking-wider font-title">
              Tudo para tocar o atendimento do dia a dia
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {solutions.map((solution) => {
              const Icon = solution.icon

              return (
                <article
                  key={solution.title}
                  className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold -tracking-wide">
                    {solution.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {solution.description}
                  </p>
                </article>
              )
            })}
          </div>
        </section>

        <section
          id="precos"
          className="border-y border-zinc-200 dark:border-zinc-900"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1fr_420px] md:items-center">
            <div>
              <p className="text-sm text-orange-500">Preços</p>
              <h2 className="mt-3 text-4xl font-semibold -tracking-wider font-title">
                Comece simples e cresça quando precisar
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Teste o Dodo com os recursos essenciais para organizar sua
                operação. Quando o volume aumentar, evolua para um plano com
                mais automações e controle financeiro.
              </p>
            </div>

            <article className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">Plano inicial</h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Para organizar os primeiros agendamentos.
                  </p>
                </div>
                <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-medium text-white">
                  Grátis
                </span>
              </div>

              <div className="mt-8 flex items-end gap-2">
                <strong className="text-5xl font-semibold -tracking-wider">
                  R$0
                </strong>
                <span className="mb-2 text-sm text-zinc-500">/ mês</span>
              </div>

              <ul className="mt-8 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                {[
                  'Agenda e serviços cadastrados',
                  'Clientes organizados',
                  'Resumo de cobranças',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check size={16} className="text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-4xl px-6 py-24">
          <div className="mb-10 text-center">
            <p className="text-sm text-orange-500">FAQ</p>
            <h2 className="mt-3 text-4xl font-semibold -tracking-wider font-title">
              Perguntas frequentes
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-3xl border border-zinc-200 p-6 dark:border-zinc-800"
              >
                <div className="flex gap-4">
                  <HelpCircle
                    size={20}
                    className="mt-0.5 shrink-0 text-orange-500"
                  />
                  <div>
                    <h3 className="font-semibold -tracking-wide">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="suporte" className="mx-auto max-w-6xl px-6 pb-24">
          <div className="rounded-4xl bg-zinc-100 p-8 dark:bg-zinc-900 md:flex md:items-center md:justify-between md:gap-10">
            <div className="max-w-2xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white">
                <MessageCircle size={22} />
              </div>
              <p className="text-sm text-orange-500">Suporte</p>
              <h2 className="mt-3 text-4xl font-semibold -tracking-wider font-title">
                Precisa de ajuda para começar?
              </h2>
              <p className="mt-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Fale com o suporte para configurar serviços, agenda e cobranças
                do jeito certo desde o primeiro dia.
              </p>
            </div>

            <Link
              href="/appointment"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-orange-500 px-8 text-xs font-medium -tracking-wide text-white md:mt-0"
            >
              Falar com suporte
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
