export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  backgroundColor?: string;
  label: string;
  value: string;
}

export interface RadioOption extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  backgroundColor?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options: RadioOption[];
  name: string;
  selectedValue?: string;
  onChange?: (value: string) => void;
}

export interface RadioStyledProps {
  backgroundColor?: string;
}
