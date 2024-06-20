export interface ToggleProps {
  onChange: (checked: boolean) => void
  label?: string;
  checked: boolean;
  disabled?: boolean;
}
