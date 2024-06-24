import { TabsProps, TabsStyledProps } from './tabs.types';
import { TabStyled } from './tabs.styles';

const Tab = ({ 
    label, 
    value, 
    selected, 
    disabled, 
    onClick 
}: TabsProps & 
TabsStyledProps & 
{ onClick: (value: string) => void }) => {
  const handleClick = () => {
    if (!disabled) {
      onClick(value);
    }
  };

  return (
    <TabStyled 
        className={selected ? 'active' : ''} 
        disabled={disabled} 
        onClick={handleClick}
    >
        {label}
    </TabStyled>
  );
};

export default Tab;