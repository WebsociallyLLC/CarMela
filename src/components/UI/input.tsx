import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', error, ...props }, ref) => {
    const inputType = type === 'number' ? 'number' : 'text';

    return (
      <div className="relative">
        <input
          type={inputType}
          className={cn(
            'flex h-10 w-full rounded-md border-2 px-3 py-2 text-[20px] font-[400] border-[#ced4da] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500',
            error ? ' !border-red-400' : '',
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <span className="absolute -bottom-5 left-0 text-xs text-red-500">
            {error}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
