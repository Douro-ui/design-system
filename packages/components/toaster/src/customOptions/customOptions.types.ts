export interface CloseButtonProps {
  styled?: CloseButtonStyledProps;
  onClick?: () => void;
}

export interface CloseButtonStyledProps {
  color?: string;
  backgroundColor?: string;
}
export interface ProgressBarProps {
  'aria-label'?: string;
  styled?: CloseButtonStyledProps;
  duration: number;
  progress: number;
}

export interface ProgressBarStyledProps {
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
}
