import { TagsProps, TagsStyledProps } from '../tags.types';
import { IconStyled, LabelStyled, TagsContainerStyled } from '../tags.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode } from 'react';

export const ReadonlyTag = ({
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
    fontWeight: theme.fontWeight.REGULAR,
    backgroundColor: theme.colors.brand.white,
    borderColor: theme.colors.neutral.cold.shade80,
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
      hasIconBefore={iconBefore ? true : false}
      hasIconAfter={iconAfter ? true : false}
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
