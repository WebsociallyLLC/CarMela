interface InputProps {
  label: string;
  value: string | number;
  onChange: (value: string | number) => void;
  type: 'number' | 'text';
  className?: string;
  divClassName?: string;
  labelClassName?: string;
  error?: string;
  placeholder?: string;
}

export type { InputProps };
