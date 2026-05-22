import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

type ServiceItemProps = Omit<ComponentProps<'li'>, 'children'> & {
  children: ReactNode
  href: string
}

type ServiceItemTitleProps = ComponentProps<'h4'> & {
  price?: number
}

type ServiceItemDescriptionProps = ComponentProps<'p'>

function formatPrice(price: number) {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: Number.isInteger(price) ? 0 : 2,
    maximumFractionDigits: 2
  })
}

export function ServiceItem({
  children,
  className,
  href,
  ...props
}: ServiceItemProps) {
  return (
    <li className={`p-5 ${className ?? ''}`} {...props}>
      <Link href={href}>{children}</Link>
    </li>
  )
}

export function ServiceItemTitle({
  children,
  className = '',
  price,
  ...props
}: ServiceItemTitleProps) {
  return (
    <h4
      className={`font-sans text-[11px] font-semibold sm:text-xs ${className}`}
      {...props}
    >
      {children}
      {price !== undefined ? (
        <>
          {' '}
          •{' '}
          <strong className="font-sans text-xs font-semibold text-green-500">
            {formatPrice(price)}
          </strong>
        </>
      ) : null}
    </h4>
  )
}

export function ServiceItemDescription({
  children,
  className = '',
  ...props
}: ServiceItemDescriptionProps) {
  return (
    <p
      className={`mt-2 truncate font-sans text-[11px] font-medium dark:font-normal text-foreground/70 ${className}`}
      {...props}
    >
      {children}
    </p>
  )
}
