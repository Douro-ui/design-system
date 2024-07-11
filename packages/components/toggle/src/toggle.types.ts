import { ChangeEventHandler, HTMLAttributes } from 'react';

export interface ToggleProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export interface SpanStyledProps extends HTMLAttributes<HTMLDivElement> {
  styledColorBackground: string;
  styledColorBackgroundHover: string;
}

export interface InputStyledProps extends HTMLAttributes<HTMLDivElement> {
  styledColor: string;
  styledColorHover: string;
  styledColorActive: string;
}
