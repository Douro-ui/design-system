import { ReactNode } from 'react';
import { ExpandablePanelItem } from './expandablePanelTypes';
import { ExpandablePanelStyled } from './expandablePanel.styles';
import {
  ExpandablePanelItemProps,
  ExpandablePanelProps,
  ExpandablePanelStyledProps,
} from './expandablePanel.types';
import { deepMerge } from '@douro-ui/react';
import { useHandleToggle } from './hooks';

const ExpandablePanel = ({
  items: initialItems,
  styled,
  preventAllClosed = false,
  multipleOpens = false,
  className,
}: ExpandablePanelProps): ReactNode => {
  const { items, handleToggle } = useHandleToggle(initialItems);
  const defaultEPHeaderThemeValues: ExpandablePanelStyledProps = {
    width: '100%',
  };

  const mergedThemeValues = deepMerge<ExpandablePanelStyledProps>(
    defaultEPHeaderThemeValues,
    styled,
  );
  return (
    <ExpandablePanelStyled
      className={className}
      styled={mergedThemeValues as Required<ExpandablePanelStyledProps>}
    >
      {items.map((itemProps: ExpandablePanelItemProps, index: number) => (
        <ExpandablePanelItem
          key={index}
          {...itemProps}
          onClick={() =>
            handleToggle({ index, preventAllClosed, multipleOpens })
          }
        />
      ))}
    </ExpandablePanelStyled>
  );
};

export default ExpandablePanel;
