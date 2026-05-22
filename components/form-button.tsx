import type { ComponentProps } from 'react'

type FormButtonProps = ComponentProps<'button'> & {
  loading?: boolean
}

export function FormButton({
  children,
  className = '',
  disabled,
  loading,
  type = 'button',
  ...props
}: FormButtonProps) {
  return (
    <button
      type={type}
      className={`flex h-14 max-h-14 w-full items-center justify-center rounded-full bg-orange-500 px-6 text-xs font-semibold uppercase tracking-[2px] text-white transition-colors disabled:bg-zinc-200 disabled:text-white disabled:dark:bg-zinc-800 ${className}`}
      disabled={disabled}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
      ) : (
        children
      )}
    </button>
  )
}
