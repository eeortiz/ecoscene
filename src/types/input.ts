import { ButtonProps } from '../components/ui/button'

export interface IconButtonProps extends ButtonProps {
  iconPosition?: 'left' | 'right'
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
  iconbuttonprops?: IconButtonProps
  label?: string
  anotherIcon?: React.ReactNode
  anotherIconButtonProps?: IconButtonProps
}
