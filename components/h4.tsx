import type { ComponentProps } from 'react'

export function H4({ children, ...props }: ComponentProps<'h4'>) {
  return (
    <h4
      className="ml-2.5 font-sans text-[11px] sm:text-xs uppercase font-medium tracking-widest"
      {...props}
    >
      {children}
    </h4>
  )
}
