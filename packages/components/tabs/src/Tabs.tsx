import { TabsProps } from './tabs.types';
import { TabStyled } from './tabs.styles';
import { useTheme, ThemeProps } from '@douro-ui/react';
import { css } from '@emotion/css';

const selectTheme = (theme: ThemeProps) => {
  return css`
    color: ${theme.colors.extended.purple.shade50};
    /* stylelint-disable */
    border-bottom: 2px solid ${theme.colors.extended.purple.shade50};
    /* stylelint-enable */
    font-weight: 600;

    svg {
      fill: ${theme.colors.extended.purple.shade50};
    }
  `;
};

const Tabs = ({
  label,
  value,
  selected,
  disabled,
  onClick,
  ...props
}: TabsProps & { onClick: (value: string) => void }) => {
  const theme = useTheme();

  const selectedTheme = selectTheme(theme);

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
      className={`${selected ? selectedTheme : ''}`}
    >
      {label}
    </TabStyled>
  );
};

export default Tabs;
