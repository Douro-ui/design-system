import { TagsProps, TagsStyledProps } from './tags.types';
import { IconStyled, LabelStyled, TagsContainerStyled } from './tags.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode } from 'react';

const Tags = ({
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
    color: theme.colors.neutral.silver.shade40,
    colorHover: theme.colors.neutral.silver.shade10,
    colorFocus: theme.colors.neutral.silver.shade10,
    colorActive: theme.colors.neutral.silver.shade10,
    fontWeight: theme.fontWeight.REGULAR,
    iconColor: theme.colors.neutral.silver.shade40,
    iconColorHover: theme.colors.neutral.silver.shade10,
    iconColorFocus: theme.colors.neutral.silver.shade10,
    iconColorActive: theme.colors.neutral.silver.shade10,
    backgroundColor: theme.colors.brand.white,
    borderColor: theme.colors.neutral.silver.shade50,
    borderColorHover: theme.colors.neutral.silver.shade30,
    borderColorFocus: theme.colors.neutral.cold.shade10,
    borderColorActive: theme.colors.neutral.cold.shade10,
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
      <IconStyled size={size}>{iconBefore && iconBefore()}</IconStyled>

      <LabelStyled
        size={size}
        styled={mergedThemeValues as Required<TagsStyledProps>}
      >
        {label}
      </LabelStyled>

      <IconStyled size={size}>{iconAfter && iconAfter()}</IconStyled>
    </TagsContainerStyled>
  );
};

export default Tags;
