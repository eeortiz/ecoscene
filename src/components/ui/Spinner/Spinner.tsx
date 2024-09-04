import { SpinnerSizesDefinition } from '../../../types/styles'

const sizesClasses: SpinnerSizesDefinition = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
  '2xl': 'h-12 w-12',
  '3xl': 'h-14 w-14',
  '4xl': 'h-16 w-16',
}

const borderSizesClasses: SpinnerSizesDefinition = {
  xs: 'border',
  sm: 'border-2',
  md: 'border-[3px]',
  lg: 'border-4',
  xl: 'border-4',
  '2xl': 'border-[6px]',
  '3xl': 'border-[7px]',
  '4xl': 'border-8',
}

export interface SpinnerProps {
  size?: keyof typeof sizesClasses
  className?: string
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 'sm', className }) => {
  return (
    <div className={`${sizesClasses[size]} relative inline-block ${className}`}>
      <div
        className={`${sizesClasses[size]} ${borderSizesClasses[size]} rounded-full absolute border-solid border-current opacity-20`}
      />
      <div
        className={`${sizesClasses[size]} ${borderSizesClasses[size]} rounded-full animate-spin absolute border-solid border-current border-t-transparent`}
      />
    </div>
  )
}
