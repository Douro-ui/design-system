import styled from '@emotion/styled';
import { ModalProps, ModalStyledProps } from './modal.types';

const handleSize = (size: ModalProps['size']) => {
  switch (size) {
    case 'sm':
      return 'width: 40vw;';
    case 'md':
    default:
      return 'width: 60vw;';
    case 'lg':
      return 'width: 80vw;';
  }
};

const handlePadding = (size: ModalProps['size']) => {
  switch (size) {
    case 'sm':
      return '0.5rem 1rem';
    default:
      return '0.75rem 1.5rem';
  }
};

const handleBodyPadding = (size: ModalProps['size']) => {
  switch (size) {
    case 'sm':
      return '1rem 1rem 2rem';
    default:
      return '1.5rem 1.5rem 4rem';
  }
};

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

export const ModalIconStyled = styled.img`
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
