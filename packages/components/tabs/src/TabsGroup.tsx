import { TabsGroupProps } from './tabs.types';
import { TabsContainerStyled } from './tabs.styles';
import Tabs from './Tabs';

const TabsGroup = ({ options, selectedValue, onChange }: TabsGroupProps) => {
  return (
    <>
      <TabsContainerStyled>
        {options.map(option => (
          <Tabs
            {...option}
            key={option.value}
            label={option.label}
            value={option.value}
            selected={selectedValue === option.value}
            disabled={option.disabled}
            onClick={ev => {
              onChange(ev.toString());
            }}
          />
        ))}
      </TabsContainerStyled>
    </>
  );
};

export default TabsGroup;
