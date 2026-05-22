import { AppointmentProvider } from '@/contexts/appointment-context'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AppointmentProvider>
      <div className="mx-auto w-full md:max-w-md p-5">
        <header className="relative h-40 bg-zinc-200 dark:bg-zinc-900 rounded-2xl">
          <div className="absolute -bottom-6 left-5 h-20 w-20 rounded-full border border-zinc-900 bg-zinc-200 dark:bg-zinc-800" />
        </header>

        {children}
      </div>
    </AppointmentProvider>
  )
}
