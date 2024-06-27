export interface ButtonProps {
  typeBtn?: 'primary' | 'secondary' | 'tertiary' | 'error';
  backgroundColor?: string;
  size?: 'extra-small' | 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}
