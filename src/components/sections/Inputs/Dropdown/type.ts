interface DropdownProps {
  label?: string;
  options: string[];
  selected: string;
  onChange: (value: string) => void;
  className?: string;
}
