import { TagsProps } from './tags.types';
import { ReactNode } from 'react';
import { DismissibleTag, ReadonlyTag, SelectableTag } from './tagTypes';

const typeTags = {
  readonly: ReadonlyTag,
  selectable: SelectableTag,
  dismissible: DismissibleTag,
};

const Tags = ({
  typeTag,
  size,
  iconBefore,
  iconAfter,
  label,
  disabled,
  styled,
  ...props
}: TagsProps): ReactNode => {
  const TagComponent = typeTags[typeTag ?? 'selectable'];

  return (
    <TagComponent
      typeTag={typeTag}
      size={size}
      data-testid="tag"
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      label={label}
      disabled={disabled}
      styled={styled}
      {...props}
    />
  );
};

export default Tags;
