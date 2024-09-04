export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
export type Rounded = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full' | 'none'

export type ButtonVariants = 'filled' | 'outlined' | 'text'
export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type SpinnerSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
export type Colors =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'white'
  | 'black'

export type ButtonSizesDefinition = Record<ButtonSizes, string>
export type SpinnerSizesDefinition = Record<SpinnerSizes, string>

export type TextSizesDefinition = Record<Sizes, string>
export type RoundedDefinition = Record<Rounded, string>
export type ColorsDefinition = Record<
  Colors,
  {
    bg: string
    textContrast: string
    text: string
    border: string
  }
>
