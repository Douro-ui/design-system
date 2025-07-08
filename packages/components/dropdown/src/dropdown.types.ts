import { Theme } from '@douro-ui/react';
import { HTMLAttributes, ReactNode } from 'react';

export interface DropdownStyledProps {
  color?: string;
  backgroundColor?: string;
  backgroundColorItem?: string;
  backgroundColorItemHover?: string;
  backgroundColorItemActive?: string;
  borderColor?: string;
  borderColorHover?: string;
  borderColorActive?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: number;
  fontSizeLabel?: string;
  fontWeightLabel?: number;
  fontWeightHover?: number;
  fontWeightActive?: number;
  width?: string;
}

export interface DropdownItem {
  id: string;
  name: string;
  imageUrl?: string;
  disabled?: boolean;
}

export interface DropdownProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  options: DropdownItem[];
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  selectedId?: string;
  onSelect?: (id: string) => void;
  icon?: ReactNode;
  styled?: DropdownStyledProps;
  theme?: Theme;
}
