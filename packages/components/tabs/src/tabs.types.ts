export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string;
  selected?: boolean;
  disabled?: boolean;
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
}
