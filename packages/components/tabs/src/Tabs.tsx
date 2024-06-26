import { TabsProps } from './tabs.types';
import { TabStyled } from './tabs.styles';

const Tabs = ({ 
    label, 
    value, 
    selected, 
    disabled, 
    onClick
}: TabsProps & 
{ onClick: (value: string) => void }) => {
  const handleClick = () => {
    if (!disabled) {
      onClick(value);
    }
  };

  return (
    <TabStyled
        selected={selected} 
        disabled={disabled} 
        onClick={handleClick}
    >
        {label}
    </TabStyled>
  );
};

export default Tabs;