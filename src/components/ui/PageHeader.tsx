import * as React from 'react'
import { cn } from "../../lib/utils";

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
}

const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ className, title, description, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('mb-8', className)}
        {...props}
      >
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
          {title}
        </h1>
        {description && (
          <p className="text-white/60">{description}</p>
        )}
        <div className="mt-4 h-px bg-gradient-to-r from-green-500/50 via-green-500/20 to-transparent" />
      </div>
    )
  }
)
PageHeader.displayName = 'PageHeader'

export { PageHeader }
