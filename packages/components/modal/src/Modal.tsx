import { ModalProps, ModalStyledProps } from './modal.types';
import {
  ModalBodyStyled,
  ModalContainerStyled,
  ModalContentStyled,
} from './modal.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode, useEffect } from 'react';
import { ModalFooter } from './modalTypes';
import { ModalHeader } from './modalTypes/ModalHeader';

const Modal = ({
  size,
  headerTitle,
  childrenBody,
  childrenFooter,
  styledHeader,
  styled,
  isOpen,
  onClose,
  ...props
}: ModalProps): ReactNode => {
  const theme = useTheme();

  const defaultThemeValues: ModalStyledProps = {
    color: theme.colors.neutral.silver.shade20,
    fontSize: theme.fontSize,
    fontWeight: theme.fontWeight.REGULAR,
    insideBorderColor: theme.colors.neutral.cold.shade90,
    backgroundColor: theme.colors.brand.white,
  };

  const mergedThemeValues = deepMerge<ModalStyledProps>(
    defaultThemeValues,
    styled,
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <ModalContainerStyled size={size} {...props}>
          <ModalContentStyled
            styled={mergedThemeValues as Required<ModalStyledProps>}
          >
            {headerTitle != undefined && (
              <ModalHeader
                className="modal-header"
                size={size}
                styled={styledHeader}
                headerTitle={headerTitle}
                onClose={onClose}
              />
            )}

            <ModalBodyStyled
              className="modal-body"
              size={size}
              styled={mergedThemeValues as Required<ModalStyledProps>}
            >
              {childrenBody}
            </ModalBodyStyled>

            {childrenFooter && (
              <ModalFooter className="modal-footer" size={size} styled={styled}>
                {childrenFooter}
              </ModalFooter>
            )}
          </ModalContentStyled>
        </ModalContainerStyled>
      )}
    </>
  );
};

export default Modal;
