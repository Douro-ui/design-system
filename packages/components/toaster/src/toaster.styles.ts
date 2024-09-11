import styled from '@emotion/styled';
import { ToasterStyledProps, ToasterProps } from './toaster.types';

export const ToasterStyled = styled.div<{
  styled: Required<ToasterStyledProps>;
  position: ToasterProps['position'];
  isInStack?: boolean;
}>`
  color: ${({ styled }) => styled.color};
  background-color: ${({ styled }) => styled.backgroundColor};
  border: 0 solid ${({ styled }) => styled.borderColor};
  border-radius: ${({ styled }) => styled.borderRadius};
  padding: 1rem;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 10%);
  position: ${({ isInStack }) => (!isInStack ? 'fixed' : 'relative')};
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 18.75rem;
  max-width: 31.25rem;
  ${({ position }) => position === 'top-right' && 'top: 1rem; right: 1rem;'}
  ${({ position }) => position === 'top-left' && 'top: 1rem; left: 1rem;'}
  ${({ position }) =>
    position === 'top-center' &&
    'top: 1rem; left: 50%; transform: translateX(-50%);'}
  ${({ position }) =>
    position === 'bottom-right' && 'bottom: 1rem; right: 1rem;'}
  ${({ position }) => position === 'bottom-left' && 'bottom: 1rem; left: 1rem;'}
  ${({ position }) =>
    position === 'bottom-center' &&
    'bottom: 1rem; left: 50%; transform: translateX(-50%);'}
  ${({ position }) =>
    position === 'center' &&
    'top: 50%; left: 50%; transform: translate(-50%, -50%);'}
  transition: 0.2s ease;
`;

export const ToasterStackStyled = styled.div<{
  position: ToasterProps['position'];
}>`
  position: fixed;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 31.25rem;

  ${({ position }) => {
    switch (position) {
      case 'top-right':
        return 'top: 1rem; right: 1rem;';
      case 'top-left':
        return 'top: 1rem; left: 1rem;';
      case 'top-center':
        return 'top: 1rem; left: 50%; transform: translateX(-50%);';
      case 'bottom-right':
        return 'bottom: 1rem; right: 1rem;';
      case 'bottom-left':
        return 'bottom: 1rem; left: 1rem;';
      case 'bottom-center':
        return 'bottom: 1rem; left: 50%; transform: translateX(-50%);';
      case 'center':
        return 'top: 50%; left: 50%; transform: translate(-50%, -50%);';
      default:
        return '';
    }
  }}
`;
