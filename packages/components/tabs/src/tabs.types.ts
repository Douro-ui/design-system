export interface TabsProps {
    label: string;
    value: string;
    selected?: boolean;
    disabled?: boolean;    
  }
    
  export interface TabsGroupProps {
    options: TabsProps[];
    selectedValue?: string;
    onChange?: (values: string) => void;
  }
  
  export interface TabsStyledProps {
    selected?: boolean;
    disabled?: boolean;
  }