'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Preços', href: '#precos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Suporte', href: '#suporte' },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Open navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-full"
      >
        <Menu size={18} />
      </button>

      <div
        className={`fixed inset-0 z-40 bg-zinc-950/35 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[84vw] max-w-80 flex-col border-l border-dashed border-zinc-200 bg-white p-5 shadow-2xl transition-transform duration-300 dark:border-zinc-800 dark:bg-zinc-950 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <p className="text-sm -tracking-wider">/ dodoapp.com</p>

          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setIsOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-950 dark:border-zinc-800 dark:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mt-10">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex border-b border-dashed border-zinc-200 py-4 text-2xl font-semibold -tracking-wider text-zinc-950 transition-colors hover:text-orange-500 dark:border-zinc-800 dark:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/appointment"
          onClick={() => setIsOpen(false)}
          className="mt-auto inline-flex h-12 items-center justify-center rounded-full bg-orange-500 px-6 text-xs font-medium -tracking-wide text-white"
        >
          Começar grátis
        </Link>
      </aside>
    </div>
  )
}
