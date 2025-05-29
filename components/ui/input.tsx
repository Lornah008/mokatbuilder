import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ suffix, className, type, ...props }, ref) => {
    return (
      <div className='relative shadow-sm'>
        <input
          type={type}
          className={cn(
            "flex h-9 w-full bg-transparent rounded-md px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none border border-input focus-visible:ring-1 focus-visible:ring-orange-500 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
          {suffix}
        </div>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }