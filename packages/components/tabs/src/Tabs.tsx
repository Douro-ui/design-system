import { TabsProps } from './tabs.types';
import { TabStyled } from './tabs.styles';
import { useTheme } from '@douro-ui/react';
import React from 'react';

const Tabs = ({
  label,
  value,
  selected,
  disabled,
  onTabChange,
  ...props
}: TabsProps & {
  onTabChange: (value: string) => void;
}): React.ReactNode => {
  const theme = useTheme();

  const handleClick = () => {
    if (!disabled) {
      onTabChange(value);
    }
  };

  return (
    <TabStyled
      selected={!!selected}
      disabled={disabled}
      onClick={handleClick}
      value={value}
      styledColor={theme.colors.neutral.cold.shade10}
      styledSelectedColor={theme.colors.extended.blue.shade50}
      {...props}
    >
      {label}
    </TabStyled>
  );
};

export default Tabs;
