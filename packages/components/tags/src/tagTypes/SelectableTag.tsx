import { TagsProps, TagsStyledProps } from '../tags.types';
import { IconStyled, LabelStyled, TagsContainerStyled } from '../tags.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode, useState } from 'react';

export const SelectableTag = ({
  size,
  iconBefore,
  iconAfter,
  label,
  disabled,
  onClick,
  styled,
  ...props
}: TagsProps): ReactNode => {
  const theme = useTheme();

  const [selected, setSelected] = useState(false);

  const defaultThemeValues: TagsStyledProps = {
    color: theme.colors.brand.primary,
    colorHover: theme.colors.brand.primary,
    colorFocus: theme.colors.brand.primary,
    colorActive: theme.colors.brand.white,
    colorDisabled: theme.colors.brand.primary,
    fontFamily: theme.fontFamily.text,
    fontWeight: theme.fontWeight.REGULAR,
    iconColorHover: theme.colors.brand.primary,
    iconColorFocus: theme.colors.brand.primary,
    iconColorActive: theme.colors.brand.white,
    iconColorDisabled: theme.colors.brand.primary,
    backgroundColor: theme.colors.neutral.cold.shade95,
    backgroundColorHover: theme.colors.neutral.cold.shade90,
    backgroundColorFocus: theme.colors.neutral.cold.shade95,
    backgroundColorActive: theme.colors.brand.primary,
    backgroundColorDisabled: theme.colors.neutral.cold.shade95,
    borderColor: theme.colors.neutral.cold.shade90,
    borderColorHover: theme.colors.neutral.cold.shade80,
    borderColorFocus: theme.colors.extended.blue.shade50,
    borderColorActive: theme.colors.brand.primary,
    borderColorDisabled: theme.colors.brand.primary,
    borderRadius: '0.25rem',
  };

  const mergedThemeValues = deepMerge<TagsStyledProps>(
    defaultThemeValues,
    styled,
  );

  const handleSelected = () => {
    if (!disabled) {
      setSelected((prevSelected: boolean) => !prevSelected);
      onClick?.();
    }
  };

  return (
    <TagsContainerStyled
      className={selected ? 'selected' : ''}
      size={size}
      disabled={disabled}
      hasIconBefore={iconBefore ? true : false}
      hasIconAfter={iconAfter ? true : false}
      onClick={handleSelected}
      isSelectableTag
      styled={mergedThemeValues as Required<TagsStyledProps>}
      {...props}
    >
      {iconBefore && (
        <IconStyled
          size={size}
          styled={mergedThemeValues as Required<TagsStyledProps>}
        >
          {iconBefore()}
        </IconStyled>
      )}

      <LabelStyled
        className="label-styled"
        size={size}
        disabled={disabled}
        styled={mergedThemeValues as Required<TagsStyledProps>}
      >
        {label}
      </LabelStyled>

      {iconAfter && (
        <IconStyled
          size={size}
          iconAfter
          styled={mergedThemeValues as Required<TagsStyledProps>}
        >
          {iconAfter()}
        </IconStyled>
      )}
    </TagsContainerStyled>
  );
};
