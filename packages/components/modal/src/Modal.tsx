import { ModalProps, ModalStyledProps } from './modal.types';
import {
  ModalBodyStyled,
  ModalContainerStyled,
  ModalContentStyled,
  ModalContetWrapperStyled,
} from './modal.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import React, { ReactNode, useEffect, useRef } from 'react';
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
  closeOnOutsideClick = true,
  ...props
}: ModalProps): ReactNode => {
  const theme = useTheme();
  const modalRef = useRef<HTMLDivElement>(null);

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
  }, [onClose, isOpen]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      closeOnOutsideClick &&
      modalRef.current &&
      !modalRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <ModalContetWrapperStyled
          data-testid="modal-overlay"
          size={size}
          onClick={handleOverlayClick}
        >
          <ModalContainerStyled size={size} {...props}>
            <ModalContentStyled
              data-testid="modal-content"
              ref={modalRef}
              styled={mergedThemeValues as Required<ModalStyledProps>}
              onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                e.stopPropagation()
              }
            >
              {typeof headerTitle !== 'undefined' && (
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
                <ModalFooter
                  className="modal-footer"
                  size={size}
                  styled={styled}
                >
                  {childrenFooter}
                </ModalFooter>
              )}
            </ModalContentStyled>
          </ModalContainerStyled>
        </ModalContetWrapperStyled>
      )}
    </>
  );
};

export default Modal;
