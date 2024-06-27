import { TabsProps } from './tabs.types';
import { TabStyled } from './tabs.styles';

const Tabs = ({
  label,
  value,
  selected,
  disabled,
  onClick,
  ...props
}: TabsProps & { onClick: (value: string) => void }) => {
  const handleClick = () => {
    if (!disabled) {
      onClick(value);
    }
  };

  return (
    <TabStyled
      {...props}
      selected={!!selected}
      disabled={disabled}
      onClick={handleClick}
      value={value}
    >
      {label}
    </TabStyled>
  );
};

export default Tabs;
