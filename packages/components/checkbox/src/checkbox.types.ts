export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  backgroundColor?: string;
  label: string;
  value: string;
  checked?: boolean;
  isCircle?: boolean;
}

export interface CheckboxOption extends React.HTMLAttributes<HTMLInputElement> {
  backgroundColor?: string;
  label: string;
  value: string;
  disabled?: boolean;
  checked?: boolean;
  isCircle?: boolean;
}

export interface CheckboxGroupProps {
  options: CheckboxOption[];
  name: string;
  selectedValues?: string[];
  onChange?: (values: string[]) => void;
}

export interface CheckboxStyledProps {
  backgroundColor?: string;
  isCircle?: boolean;
}
