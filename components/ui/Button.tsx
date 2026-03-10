import React from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | string
export type ButtonSize = 'sm' | 'md' | 'lg' | string

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullsize?: boolean
  className?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullsize = false,
      className = '',
      children,
      ...rest
    },
    ref
  ) => {
    const classes = [
      'btn',
      `btn--${variant}`,
      `btn--${size}`,
      fullsize ? 'btn--fullsize' : null,
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <button ref={ref} className={classes} {...rest}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
