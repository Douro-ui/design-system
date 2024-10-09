import { TagsProps, TagsStyledProps } from '../tags.types';
import { IconStyled, LabelStyled, TagsContainerStyled } from '../tags.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode } from 'react';

export const SelectableTag = ({
  size,
  iconBefore,
  iconAfter,
  label,
  disabled,
  styled,
  ...props
}: TagsProps): ReactNode => {
  const theme = useTheme();

  const defaultThemeValues: TagsStyledProps = {
    color: theme.colors.brand.primary,
    colorHover: theme.colors.brand.primary,
    colorFocus: theme.colors.brand.primary,
    colorActive: theme.colors.brand.white,
    colorDisabled: theme.colors.neutral.cold.shade80,
    fontWeight: theme.fontWeight.REGULAR,
    iconColorHover: theme.colors.brand.primary,
    iconColorFocus: theme.colors.brand.primary,
    iconColorActive: theme.colors.brand.white,
    iconColorDisabled: theme.colors.neutral.cold.shade80,
    backgroundColor: theme.colors.neutral.cold.shade95,
    backgroundColorHover: theme.colors.neutral.cold.shade90,
    backgroundColorFocus: theme.colors.neutral.cold.shade95,
    backgroundColorActive: theme.colors.brand.primary,
    backgroundColorDisabled: theme.colors.brand.white,
    borderColor: theme.colors.neutral.cold.shade90,
    borderColorHover: theme.colors.neutral.cold.shade80,
    borderColorFocus: theme.colors.extended.blue.shade50,
    borderColorActive: theme.colors.brand.primary,
    borderColorDisabled: theme.colors.neutral.cold.shade80,
    borderRadius: '0.25rem',
  };

  const mergedThemeValues = deepMerge<TagsStyledProps>(
    defaultThemeValues,
    styled,
  );

  return (
    <TagsContainerStyled
      size={size}
      disabled={disabled}
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
          styled={mergedThemeValues as Required<TagsStyledProps>}
        >
          {iconAfter()}
        </IconStyled>
      )}
    </TagsContainerStyled>
  );
};
