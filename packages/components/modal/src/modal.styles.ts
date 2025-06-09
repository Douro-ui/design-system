import styled from '@emotion/styled';
import { ModalProps, ModalStyledProps, ShirtSize } from './modal.types';
import { CloseIcon } from '@douro-ui/svg-icons';
import type { SVGProps } from 'react';

const handleSize = (size: ModalProps['size']) => {
  switch (size) {
    case ShirtSize.sm:
      return 'width: 40vw;';
    case ShirtSize.md:
    default:
      return 'width: 60vw;';
    case ShirtSize.lg:
      return 'width: 80vw;';
  }
};

const handlePadding = (size: ModalProps['size']) => {
  switch (size) {
    case ShirtSize.sm:
      return '0.5rem 1rem';
    default:
      return '0.75rem 1.5rem';
  }
};

const handleBodyPadding = (size: ModalProps['size']) => {
  switch (size) {
    case ShirtSize.sm:
      return '1rem 1rem 2rem';
    default:
      return '1.5rem 1.5rem 4rem';
  }
};

export const ModalContetWrapperStyled = styled.div<{
  size: ModalProps['size'];
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainerStyled = styled.div<{
  size: ModalProps['size'];
}>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s linear;
  margin: auto;
  text-align: center;
  background-color: transparent;
  ${({ size }) => handleSize(size)};
  z-index: 1000;
`;

export const ModalContentStyled = styled.div<{
  styled: Required<ModalStyledProps>;
}>`
  border-radius: 0.5rem;
  padding: 0;
  box-shadow: 0.25rem 0.25rem 1.25rem rgb(0 0 0 / 15%);
  border: none;
  background-color: ${({ styled }) => styled.backgroundColor};
  max-height: calc(100vh - 3rem);
`;

export const ModalHeaderStyled = styled.div<{
  styled: Required<ModalStyledProps>;
  size: ModalProps['size'];
}>`
  border-bottom: 1px solid ${({ styled }) => styled.insideBorderColor};
  text-align: start;
  font-size: ${({ styled }) => styled.fontSize};
  font-weight: ${({ styled }) => styled.fontWeight};
  display: flex;
  justify-content: space-between;
  padding: ${({ size }) => handlePadding(size)};
  color: ${({ styled }) => styled.color};
  background-color: ${({ styled }) => styled.backgroundColor};
`;

export const ModalIconStyled = styled(CloseIcon)<SVGProps<SVGSVGElement>>`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

export const ModalBodyStyled = styled.div<{
  styled: Required<ModalStyledProps>;
  size: ModalProps['size'];
}>`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;
  padding: ${({ size }) => handleBodyPadding(size)};
  text-align: left;
  color: ${({ styled }) => styled.color};
  font-size: ${({ styled }) => styled.fontSize};
  font-weight: ${({ styled }) => styled.fontWeight};
`;

export const ModalFooterStyled = styled.div<{
  styled: Required<ModalStyledProps>;
  size: ModalProps['size'];
}>`
  margin: 0;
  padding: ${({ size }) => handlePadding(size)};
  border-top: 1px solid ${({ styled }) => styled.insideBorderColor};
  display: flex;
  align-items: center;
  justify-content: ${({ styled }) => styled.justifyContentFooter};
  gap: 1rem;
  background-color: ${({ styled }) => styled.backgroundColor};
  color: ${({ styled }) => styled.color};
`;

export const ModalHeaderButtonContainer = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
