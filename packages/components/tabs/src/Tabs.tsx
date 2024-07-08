import { TabsProps } from './tabs.types';
import { TabStyled } from './tabs.styles';
import { useTheme } from '@douro-ui/react';
import { FC } from 'react';

const Tabs: FC<TabsProps & { onClick: (value: string) => void }> = ({
  label,
  value,
  selected,
  disabled,
  onClick,
  ...props
}) => {
  const theme = useTheme();

  const handleClick = () => {
    if (!disabled) {
      onClick(value);
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
