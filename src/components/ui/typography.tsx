import * as React from "react"
import { cn } from "@/lib/utils"

type TypographyVariant = 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'h4' 
  | 'h5' 
  | 'h6' 
  | 'subtitle1' 
  | 'subtitle2' 
  | 'body1' 
  | 'body2' 
  | 'input' 
  | 'caption' 
  | 'overline'

type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant
  as?: TypographyElement
}

const variantMap: Record<TypographyVariant, TypographyElement> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'p',
  subtitle2: 'p',
  body1: 'p',
  body2: 'p',
  input: 'span',
  caption: 'span',
  overline: 'span',
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = 'body1', as, ...props }, ref) => {
    const Component = (as || variantMap[variant] || 'p') as TypographyElement
    const variantClass = `text-${variant}`
    
    return React.createElement(
      Component,
      {
        ref,
        className: cn(variantClass, className),
        ...props,
      }
    )
  }
)
Typography.displayName = "Typography"

export { Typography, type TypographyProps }


