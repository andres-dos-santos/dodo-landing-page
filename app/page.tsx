import {
  ArrowDownLeft,
  ArrowRight,
  Check,
  Ellipsis,
  Mail,
  MessageCircle,
  Phone,
  Star,
} from 'lucide-react'
import Link from 'next/link'

const solutions = [
  {
    title: 'Agenda inteligente para serviços',
    description:
      'Organize horários, serviços, profissionais e disponibilidade sem depender de conversas soltas.',
    link: 'Ver agenda',
    visual: 'schedule',
  },
  {
    title: 'Clientes, histórico e cobrança',
    description:
      'Mantenha contatos, preferências, atendimentos e valores sempre prontos para o próximo passo.',
    link: 'Ver clientes',
    visual: 'clients',
  },
  {
    title: 'Mensagens e notificações',
    description:
      'Envie mensagens e notificações para seus clientes, mantendo-os informados sobre agendamentos, alterações e lembretes.',
    link: 'Ver mensagens',
    visual: 'messages',
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

const pricingPlans = [
  {
    name: 'Grátis',
    description: 'Para começar a organizar seus primeiros atendimentos.',
    price: 'R$ 0',
    period: '',
    note: 'Ideal para testar o Dodo sem compromisso.',
    features: [
      '20 agendamentos por mês',
      '5 clientes cadastrados',
      '1 serviço ativo',
      'Agenda básica',
    ],
  },
  {
    name: 'O certo!',
    description: 'Para profissionais que já atendem com frequência.',
    price: 'R$ 49',
    period: 'mês',
    note: 'Cobrado a R$ 490 por ano.',
    highlighted: true,
    features: [
      'Agendamentos ilimitados',
      'Clientes ilimitados',
      '10 serviços ativos',
      'Resumo de cobranças',
    ],
  },
  {
    name: 'Para o time',
    description: 'Para operações com mais pessoas, agenda e controle.',
    price: 'R$ 99',
    period: 'mês',
    note: 'Cobrado a R$ 990 por ano.',
    features: [
      'Tudo do Essencial',
      'Usuários ilimitados',
      'Relatórios do atendimento',
      'Suporte prioritário',
    ],
  },
]

const footerSections = [
  {
    title: 'Produto',
    links: [
      { label: 'Soluções', href: '#solucoes' },
      { label: 'Preços', href: '#precos' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Suporte', href: '#suporte' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre o Dodo', href: '/' },
      { label: 'Baixar app', href: '/appointment' },
      { label: 'Começar grátis', href: '/appointment' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Termos de uso', href: '/terms' },
      { label: 'Privacidade', href: '/privacy' },
      { label: 'Cookies', href: '/' },
    ],
  },
]

export default function Home() {
  return (
    <div className="relative">
      <header className="flex z-20 fixed bg-white/90 dark:bg-zinc-900 backdrop-blur-xl w-full h-20 border-b border-dashed border-zinc-200 dark:border-zinc-800 items-center justify-between px-4 sm:px-6 lg:px-10">
        <div className="flex items-center md:w-56">
          {/* <div className="h-10 w-10"></div> */}
          <p className="text-sm -tracking-wider">/ dodoapp.com</p>
        </div>

        <nav className="hidden flex-1 items-center justify-center md:flex">
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

        <div className="flex md:w-56">
          <Link href="/appointment" className="ml-auto">
            <Ellipsis />
          </Link>
        </div>
      </header>

      <div className="bg-white dark:bg-zinc-900 z-10 pb-10">
        <main className="pt-20">
          <section className="relative mx-auto w-full border-x border-zinc-200 dark:border-zinc-800 border-dashed min-h-[calc(100vh-5rem)] px-5 py-10 text-center sm:w-[92%] sm:px-6 sm:py-12 lg:w-[80%] lg:pt-10 lg:pb-20">
            {/* <div className="absolute top-[-4px] -left-[4px] z-10 bg-white dark:bg-zinc-950 rounded-full h-2 w-2 border-2 border-zinc-200 dark:border-zinc-700"></div>
          <div className="absolute top-[-4px] -right-[4px] z-10 bg-white dark:bg-zinc-950 rounded-full h-2 w-2 border-2 border-zinc-200 dark:border-zinc-700"></div>
          <div className="absolute bottom-[-4px] -left-[4px] z-10 bg-white dark:bg-zinc-950 rounded-full h-2 w-2 border-2 border-zinc-200 dark:border-zinc-700"></div>
          <div className="absolute bottom-[-4px] -right-[4px] z-10 bg-white dark:bg-zinc-950 rounded-full h-2 w-2 border-2 border-zinc-200 dark:border-zinc-700"></div> */}

            <div className="absolute top-[-40px] right-[-140px] h-[240px] w-[240px] rounded-full bg-gradient-to-r blur-[90px] dark:from-purple-200/40 dark:via-orange-200/30 dark:to-blue-200/40 dark:from-purple-500/40 dark:via-orange-500/30 dark:to-blue-500/40 sm:right-[-50px] sm:h-[300px] sm:w-[300px] sm:blur-[120px]" />
            <div className="absolute top-[-80px] left-[-240px] h-[420px] w-[420px] blur-[90px] bg-gradient-to-br from-[#FAF8FF] to-[#FCFBFF] dark:from-[#120A19] dark:to-[#150624] sm:top-[-100px] sm:left-[-200px] sm:h-[600px] sm:w-[600px] sm:blur-[100px]" />

            <div className="relative mx-auto max-w-4xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full dark:text-white text-zinc-900 px-3 py-2 text-xs font-semibold sm:mb-8">
                <span className="flex h-6 w-6 items-center justify-center rounded bg-zinc-100 dark:bg-zinc-800">
                  <Star size={14} fill="currentColor" />
                </span>
                5.0 of reviews
              </div>

              <h3 className="text-4xl font-semibold -tracking-wider text-center text-balance font-title sm:text-5xl lg:text-6xl">
                Agendamentos, clientes e pagamentos
              </h3>

              <p className="mx-auto my-7 max-w-sm text-sm leading-6 sm:my-10 sm:max-w-md sm:text-[15px]">
                Gerencie sua agenda, clientes, serviços e cobranças sem
                complicação.
              </p>

              <div className="mb-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
                <button
                  type="button"
                  className="h-12 w-full rounded-full dark:bg-white bg-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 px-10 sm:w-auto"
                >
                  <p className="text-xs text-white dark:text-zinc-900 font-medium -tracking-wide">
                    Comece, é grátis
                  </p>
                </button>

                <button
                  type="button"
                  className="group relative h-12 w-full min-w-[160px] rounded-full border border-zinc-500 px-10 sm:w-auto"
                >
                  <p className="transition-opacity opacity-100 group-hover:delay-[0ms] delay-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 text-xs font-medium -tracking-wide">
                    Download app
                  </p>

                  <div className="flex items-center absolute left-1/2 top-1/2 gap-2 -translate-x-1/2 -translate-y-1/2 ">
                    <ArrowDownLeft
                      size={14}
                      className="transition-all group-hover:duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-3 group-hover:translate-x-0 translate-x-3"
                    />
                    <p className="text-xs font-medium -tracking-wide group-hover:delay-300 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-3">
                      Clique...
                    </p>
                  </div>
                </button>
              </div>

              <div className="h-56 rounded-[28px] bg-zinc-200 dark:bg-zinc-900 sm:h-80 sm:rounded-4xl lg:h-96"></div>
            </div>
          </section>

          <section
            id="solucoes"
            className="mx-auto w-full border-x border-t border-zinc-200 dark:border-zinc-800 border-dashed relative overflow-hidden sm:w-[92%] lg:w-[80%]"
          >
            <div className="grid md:grid-cols-2">
              {solutions.map((solution) => {
                return (
                  <article
                    key={solution.title}
                    className="border-b border-dashed relative border-zinc-200 dark:border-zinc-800 px-5 py-10 sm:px-7 sm:pt-16 sm:pb-0 md:px-16 md:first:border-r lg:px-32"
                  >
                    <div className="max-w-xl">
                      <h2 className="max-w-lg text-3xl font-semibold leading-[0.95] -tracking-wider font-title sm:text-4xl">
                        {solution.title}
                      </h2>

                      <p className="my-7 max-w-lg text-sm leading-6 text-zinc-500 dark:text-zinc-300 sm:my-10">
                        {solution.description}
                      </p>

                      <Link
                        href="/appointment"
                        className="inline-flex items-center gap-2 text-sm font-medium text-orange-500 transition-colors hover:text-orange-600"
                      >
                        {solution.link}
                        <ArrowRight size={15} />
                      </Link>
                    </div>

                    <div className="mt-10 h-56 border border-zinc-200 dark:border-zinc-800/50 dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:54px_54px] p-6 dark:shadow-2xl dark:shadow-black/40 sm:mt-12 sm:h-[400px] sm:border-b-0"></div>
                  </article>
                )
              })}

              <article className="flex items-center justify-center border-b border-dashed relative border-zinc-200 dark:border-zinc-800 px-5 py-10 sm:px-7 sm:pt-16 md:border-l md:px-16 lg:px-32">
                <div className="h-56 w-full max-w-[400px] border border-zinc-200 dark:border-zinc-800/50 dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:54px_54px] p-6 dark:shadow-2xl dark:shadow-black/40 sm:h-[400px]"></div>
              </article>
            </div>
          </section>

          <section
            id="precos"
            className="relative border-zinc-200 mx-auto w-full border border-t-0 dark:border-zinc-800 border-dashed px-5 py-16 sm:w-[92%] sm:px-6 sm:py-24 lg:w-[80%]"
          >
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 mx-auto max-w-2xl flex flex-col items-center justify-center text-center">
                <p className="font-semibold text-xs text-orange-500 tracking-widest">
                  PREÇOS
                </p>

                <h2 className="mt-3 text-3xl font-semibold text-balance -tracking-wider font-title sm:text-4xl">
                  Comece simples, cresça no seu ritmo
                </h2>

                <p className="mt-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Escolha o plano que acompanha o momento da sua operação.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3 md:gap-2">
                {pricingPlans.map((plan) => (
                  <article key={plan.name} className="group">
                    <div
                      className={`flex items-center justify-center h-10 gap-2 ${!plan.highlighted && 'opacity-0'} opacity-0 transition-all duration-300 group-hover:translate-y-0 translate-y-3.5 ${plan.highlighted && 'group-hover:opacity-100 border border-zinc-200 dark:border-zinc-800'}`}
                    >
                      <Star
                        size={12}
                        fill="currentColor"
                        className="text-orange-500"
                      />
                      <p className="text-[9px] font-semibold tracking-[4px] mt-[3px]">
                        MELHOR PLANO
                      </p>
                    </div>

                    <div className="relative hover:border-zinc-200 hover:dark:border-zinc-700 overflow-hidden mt-2 border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6">
                      <div className="min-h-24">
                        <h3 className="text-xl font-title font-semibold -tracking-wide text-zinc-950 dark:text-white">
                          {plan.name}
                        </h3>
                        <p className="mt-2 text-xs font-medium leading-5 text-zinc-600 dark:text-zinc-400">
                          {plan.description}
                        </p>
                      </div>

                      <div className="mt-6">
                        <div className="flex items-start gap-1.5">
                          <strong className="block text-4xl font-semibold -tracking-wider font-title text-zinc-950 dark:text-white">
                            {plan.price}{' '}
                          </strong>
                          <p className="mt-2 text-xs tracking-normal font-medium leading-4">
                            {plan.period !== '' && ` / ${plan.period}`}
                          </p>
                        </div>
                        <p className="mt-2 text-xs font-medium leading-4 text-zinc-500">
                          <br />
                          {plan.note}
                        </p>
                      </div>

                      <Link
                        href="/appointment"
                        className={`mt-6 inline-flex h-11 w-full items-center justify-center border px-5 text-xs font-semibold transition-colors ${
                          plan.highlighted
                            ? 'border-orange-500 bg-orange-500 text-white hover:bg-orange-600'
                            : 'border-zinc-200 bg-white text-zinc-950 hover:border-orange-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:border-orange-500'
                        }`}
                      >
                        Começar agora
                      </Link>

                      {/* <div className="my-7 flex items-center gap-3 text-orange-200 dark:text-zinc-800">
                        <span className="h-px flex-1 bg-current" />
                        <span className="h-2 w-2 rounded-full bg-current" />
                        <span className="h-px flex-1 bg-current" />
                      </div> */}

                      <p className="text-xs font-semibold text-zinc-500 mt-5">
                        O que está incluído:
                      </p>

                      <ul className="mt-4 space-y-3 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <Check
                              size={14}
                              strokeWidth={2.5}
                              className="shrink-0 text-orange-500"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            id="faq"
            className="relative border-zinc-200 mx-auto w-full border-x dark:border-zinc-800 border-dashed sm:w-[92%] lg:w-[80%]"
          >
            <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-24">
              <div className="mb-10 text-center">
                <p className="font-semibold text-xs text-orange-500 tracking-widest">
                  FAQ
                </p>
                <h2 className="mt-3 text-3xl font-semibold -tracking-wider font-title sm:text-4xl">
                  Perguntas frequentes
                </h2>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <article
                    key={faq.question}
                    className="border-b border-zinc-200 pb-6 flex items-center dark:border-zinc-800/50 group"
                  >
                    <div className="flex items-start gap-4 sm:items-center">
                      <div className="group-hover:bg-zinc-200/50 dark:group-hover:bg-zinc-900/50 h-12 w-12 shrink-0 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center sm:h-16 sm:w-16">
                        <p className="text-sm font-title font-semibold">
                          {index + 1}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold -tracking-wide text-[13px]">
                          {faq.question}
                        </h3>
                        <p className="text-xs font-medium leading-6 text-zinc-600 dark:text-zinc-400">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            id="suporte"
            className="relative border-zinc-200 mx-auto w-full border-x dark:border-zinc-800 border-dashed pb-16 sm:w-[92%] sm:pb-24 lg:w-[80%]"
          >
            <div className="mx-auto max-w-6xl">
              <div className="rounded-[28px] bg-zinc-100 p-6 dark:bg-zinc-900/30 sm:rounded-4xl sm:p-10 md:flex md:items-center md:justify-between md:gap-10 lg:p-32">
                <div className="max-w-xl">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white">
                    <MessageCircle size={22} />
                  </div>
                  <p className="font-semibold text-xs text-orange-500 tracking-widest">
                    SUPORTE
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold -tracking-wider font-title sm:text-4xl">
                    Precisa de ajuda para começar?
                  </h2>
                  <p className="mt-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Fale com o suporte para configurar serviços, agenda e
                    cobranças do jeito certo desde o primeiro dia.
                  </p>
                </div>

                <Link
                  href="/appointment"
                  className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-orange-500 px-8 text-xs font-medium -tracking-wide text-white sm:w-auto md:mt-0"
                >
                  Falar com suporte
                </Link>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-dashed border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
            <div>
              <p className="text-sm -tracking-wider">/ dodoapp.com</p>
              <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Organize agendamentos, clientes, serviços e cobranças em uma
                rotina simples para o seu negócio.
              </p>

              <div className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                <a
                  href="mailto:contato@dodoapp.com"
                  className="flex items-center gap-3 transition-colors hover:text-orange-500"
                >
                  <Mail size={16} />
                  contato@dodoapp.com
                </a>
                <a
                  href="tel:+5500000000000"
                  className="flex items-center gap-3 transition-colors hover:text-orange-500"
                >
                  <Phone size={16} />
                  Fale conosco
                </a>
              </div>
            </div>

            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="ml-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                  {section.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[10px] font-medium text-zinc-700 transition-colors hover:bg-orange-500 p-1 hover:text-zinc-900 dark:hover:text-white uppercase dark:text-zinc-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-dashed border-zinc-200 px-6 py-6 text-center text-xs text-zinc-500 dark:border-zinc-800">
            © 2026 Dodo. Todos os direitos reservados.
          </div>
        </footer>
      </div>

      <div className="mx-auto flex max-w-5xl items-center justify-center overflow-hidden px-4">
        <strong className="absolute text-[42px] font-black leading-none text-center text-zinc-200 dark:text-zinc-400 -tracking-widest sm:text-[78px] lg:text-[120px] lg:leading-[30px]">
          dodoapp.com.br
        </strong>
      </div>
    </div>
  )
}
