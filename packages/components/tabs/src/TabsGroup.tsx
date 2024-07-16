import { TabsGroupProps, TabsProps } from './tabs.types';
import { TabsContainerStyled } from './tabs.styles';
import Tabs from './Tabs';
import { useTheme } from '@douro-ui/react';
import React from 'react';

const TabsGroup = ({
  options,
  selectedValue,
  onChange,
}: TabsGroupProps): React.ReactNode => {
  const theme = useTheme();

  return (
    <>
      <TabsContainerStyled
        styledBorder={theme.colors.neutral.silver.shade30}
        styledBackgroundColor={theme.colors.brand.white}
      >
        {options.map((option: TabsProps) => (
          <Tabs
            {...option}
            key={option.value}
            label={option.label}
            value={option.value}
            selected={selectedValue === option.value}
            disabled={option.disabled}
            onTabChange={(value: string) => {
              onChange(value);
            }}
          />
        ))}
      </TabsContainerStyled>
    </>
  );
};

export default TabsGroup;
