import { TagsProps, TagsStyledProps } from '../tags.types';
import { IconStyled, LabelStyled, TagsContainerStyled } from '../tags.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode, useState } from 'react';

export const DismissibleTag = ({
  typeTag,
  size,
  iconBefore,
  iconAfter,
  label,
  disabled,
  onClose,
  styled,
  ...props
}: TagsProps): ReactNode => {
  const theme = useTheme();

  const [closed, setClosed] = useState(false);

  const defaultThemeValues: TagsStyledProps = {
    color: theme.colors.brand.primary,
    colorHover: theme.colors.brand.primary,
    colorFocus: theme.colors.brand.primary,
    fontWeight: theme.fontWeight.REGULAR,
    iconColorHover: theme.colors.brand.primary,
    iconColorFocus: theme.colors.brand.primary,
    iconBackgroundColorHover: theme.colors.neutral.cold.shade90,
    iconBackgroundColorFocus: theme.colors.neutral.cold.shade90,
    iconborderColorFocus: theme.colors.extended.blue.shade50,
    backgroundColor: theme.colors.brand.white,
    backgroundColorHover: theme.colors.brand.white,
    backgroundColorFocus: theme.colors.brand.white,
    borderColor: theme.colors.neutral.cold.shade80,
    borderColorHover: theme.colors.neutral.cold.shade80,
    borderColorFocus: theme.colors.neutral.cold.shade80,
    borderRadius: '0.25rem',
  };

  const mergedThemeValues = deepMerge<TagsStyledProps>(
    defaultThemeValues,
    styled,
  );

  const handleClose = () => {
    if (!disabled) {
      setClosed(true);
      onClose?.();
    }
  };

  return (
    !closed && (
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
            typeTag={typeTag}
            size={size}
            iconAfter
            styled={mergedThemeValues as Required<TagsStyledProps>}
            onClick={handleClose}
          >
            {iconAfter()}
          </IconStyled>
        )}
      </TagsContainerStyled>
    )
  );
};
