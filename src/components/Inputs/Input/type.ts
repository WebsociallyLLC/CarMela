interface InputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  type: 'number' | 'text';
  className?: string;
  divClassName?: string;
  labelClassName?: string;
}
