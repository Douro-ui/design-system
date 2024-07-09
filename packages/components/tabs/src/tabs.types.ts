import { HTMLAttributes } from 'react';

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string;
  selected?: boolean;
  disabled?: boolean;
}

export interface TabsContainerStyledProps {
  styledBorder: string;
  styledBackgroundColor: string;
}

export interface TabsGroupProps extends Partial<HTMLDivElement> {
  options: TabsProps[];
  selectedValue?: string;
  onChange?: (values: string) => void;
}

export interface TabsStyledProps {
  selected?: boolean;
  disabled?: boolean;
  value: string;
  styledColor: string;
  styledSelectedColor: string;
}
