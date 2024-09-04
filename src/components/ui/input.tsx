import * as React from 'react'
import { Label } from './label'
import { cn } from '../../lib/utils'
import { InputProps } from '../../types/input'

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const defaultId = React.useId()
    const { label, id, icon, iconbuttonprops, anotherIconButtonProps } = props
    const { iconPosition = 'left' } = iconbuttonprops ?? {}
    const fieldId = id ?? defaultId

    const checkLeftIconPosition = icon && iconPosition == 'left'
    const checkLeftAnotherIconPosition =
      icon && anotherIconButtonProps?.iconPosition == 'left'

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
      if (type === 'number') {
        const sanitizedValue = e.currentTarget.value
          .replace(/\D/g, '')
          .slice(0, 10)
        e.currentTarget.value = sanitizedValue
      }

      if (type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const isValidEmail = emailRegex.test(e.currentTarget.value)

        if (!isValidEmail) {
          console.log('Correo electrónico no válido')
        }
      }
    }

    return (
      <div className="grid w-full items-center gap-1.5">
        {label && <Label htmlFor={fieldId}>{label}</Label>}
        <div className="relative flex items-center">
          <input
            id={fieldId}
            type={type}
            onInput={handleInputChange}
            className={cn(
              'text-md flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
              className,
              checkLeftIconPosition ? 'pl-10' : 'pr-10',
              checkLeftAnotherIconPosition ? 'pl-10' : 'pr-10'
            )}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
