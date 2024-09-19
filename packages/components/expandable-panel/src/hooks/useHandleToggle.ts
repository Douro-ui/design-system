import { useState, useCallback } from 'react';
import {
  ExpandablePanelItemProps,
  HandleToggleArgs,
} from '../expandablePanel.types';

export const useHandleToggle = (
  initialItems: ExpandablePanelItemProps[],
): {
  items: ExpandablePanelItemProps[];
  handleToggle: ({
    index,
    preventAllClosed,
    multipleOpens,
  }: Omit<HandleToggleArgs, 'setItems'>) => void;
} => {
  const [items, setItems] = useState<ExpandablePanelItemProps[]>(initialItems);

  const handleToggle = useCallback(
    ({
      index,
      preventAllClosed = false,
      multipleOpens = false,
    }: Omit<HandleToggleArgs, 'setItems'>): void => {
      setItems((prevItems: ExpandablePanelItemProps[]) => {
        if (prevItems[index].disabled) {
          return prevItems;
        }

        const updatedItems = prevItems.map(
          (item: ExpandablePanelItemProps, i: number) => {
            if (i === index) {
              const newState = !item.expanded;
              if (
                !newState &&
                preventAllClosed &&
                prevItems.filter(
                  (item: ExpandablePanelItemProps) => item.expanded,
                ).length === 1
              ) {
                return item;
              }
              return {
                ...item,
                expanded: newState,
              };
            }

            if (!multipleOpens) {
              return {
                ...item,
                expanded: false,
              };
            }
            return item;
          },
        );

        if (
          preventAllClosed &&
          !updatedItems.some(
            (item: ExpandablePanelItemProps) => item.expanded && !item.disabled,
          )
        ) {
          updatedItems[index].expanded = true;
        }

        return updatedItems;
      });
    },
    [setItems],
  );

  return { items, handleToggle };
};
