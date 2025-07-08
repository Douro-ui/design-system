import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { deepMerge, useTheme } from '@douro-ui/react';
import {
  DropdownItemStyled,
  DropdownItemTextStyled,
  DropdownLabelStyled,
  DropdownListStyled,
  DropdownTriggerStyled,
  DropdownWrapperStyled,
} from './dropdown.styles';
import {
  DropdownItem,
  DropdownProps,
  DropdownStyledProps,
} from './dropdown.types';

const Dropdown = ({
  options,
  label,
  placeholder,
  disabled = false,
  selectedId,
  onSelect,
  icon,
  styled,
}: DropdownProps): ReactNode => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | undefined>(
    selectedId
      ? options.find((item: DropdownItem) => item.id === selectedId)
      : undefined,
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const defaultThemeValues: DropdownStyledProps = {
    color: theme.colors.neutral.silver.shade10,
    backgroundColor: theme.colors.brand.white,
    backgroundColorItem: theme.colors.brand.white,
    backgroundColorItemHover: theme.colors.neutral.silver.shade95,
    backgroundColorItemActive: theme.colors.neutral.silver.shade90,
    borderColor: theme.colors.neutral.silver.shade70,
    borderColorHover: theme.colors.neutral.silver.shade50,
    borderColorActive: theme.colors.neutral.silver.shade30,
    borderRadius: '0.25rem',
    fontSize: theme.fontSize,
    fontWeight: theme.fontWeight.REGULAR,
    fontSizeLabel: theme.fontSize,
    fontWeightLabel: theme.fontWeight.BOLD,
    fontWeightHover: theme.fontWeight.BOLDER,
    fontWeightActive: theme.fontWeight.BOLDER,
    width: '20rem',
  };

  const mergedThemeValues = deepMerge(defaultThemeValues, styled);

  useEffect(() => {
    if (selectedId) {
      const newSelectedItem: DropdownItem | undefined = options.find(
        (item: DropdownItem) => item.id === selectedId,
      );
      if (newSelectedItem) {
        setSelectedItem(newSelectedItem);
      }
    } else {
      setSelectedItem(undefined);
    }
  }, [selectedId, options]);

  const handleChange = useCallback(
    (item: DropdownItem) => {
      setSelectedItem(item);

      if (onSelect) {
        onSelect(item.id);
      }

      setIsOpen(false);
    },
    [setSelectedItem, onSelect, setIsOpen],
  );

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <DropdownWrapperStyled ref={dropdownRef} isDisabled={disabled}>
      {label && (
        <DropdownLabelStyled
          styled={mergedThemeValues as Required<DropdownStyledProps>}
        >
          {label}
        </DropdownLabelStyled>
      )}

      <DropdownTriggerStyled
        styled={mergedThemeValues as Required<DropdownStyledProps>}
        options={options}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        {selectedItem ? selectedItem.name : placeholder}

        {icon && <span>{icon}</span>}
        {!icon && <span>{isOpen ? '>' : '<'}</span>}
      </DropdownTriggerStyled>

      <DropdownListStyled
        styled={mergedThemeValues as Required<DropdownStyledProps>}
        isOpen={isOpen}
        options={options}
        className={isOpen ? 'opened' : ''}
      >
        {options.map((item: DropdownItem) => (
          <DropdownItemStyled
            styled={mergedThemeValues as Required<DropdownStyledProps>}
            key={item.id}
            isSelected={item === selectedItem}
            isDisabled={item.disabled ?? false}
            onClick={() => !item.disabled && handleChange(item)}
          >
            <DropdownItemTextStyled
              styled={mergedThemeValues as Required<DropdownStyledProps>}
              isSelected={item === selectedItem}
            >
              {item.name}
            </DropdownItemTextStyled>
          </DropdownItemStyled>
        ))}
      </DropdownListStyled>
    </DropdownWrapperStyled>
  );
};

export default Dropdown;
