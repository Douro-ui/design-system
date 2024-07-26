import {
  ChangeEventHandler,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from 'react';

export interface ToggleProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  styled?: InputStyledProps & SpanStyledProps;
}

export interface ToggleContainerStyledProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  disabled?: boolean;
}

export interface SpanStyledProps extends HTMLAttributes<HTMLSpanElement> {
  styledColorBackground: string;
  styledColorBackgroundHover: string;
}

export interface InputStyledProps
  extends InputHTMLAttributes<HTMLInputElement> {
  styledColor: string;
  styledColorHover: string;
  styledColorActive: string;
}
