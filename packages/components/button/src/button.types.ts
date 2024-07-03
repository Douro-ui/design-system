export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  typeBtn: 'primary' | 'secondary' | 'tertiary' | 'error';
  size?: 'extra-small' | 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  'data-testid'?: string;
}
