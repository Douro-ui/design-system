import { TabsGroupProps } from './tabs.types';
import { TabsContainerStyled } from './tabs.styles';
import Tabs from './Tabs';
import { useTheme } from '@douro-ui/react';
import { FC } from 'react';

const TabsGroup: FC<TabsGroupProps> = ({
  options,
  selectedValue,
  onChange,
}: TabsGroupProps) => {
  const theme = useTheme();

  return (
    <>
      <TabsContainerStyled
        styledBorder={theme.colors.neutral.silver.shade30}
        styledBackgroundColor={theme.colors.brand.white}
      >
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
