import React from 'react';
import { CloseButton, ProgressBar } from './customOptions';
import { getToasterTypesStyles } from './utils';
import { useToaster } from './hooks';
import type { ToasterProps } from './toaster.types';

export const Toaster = ({
  id,
  typeToaster = 'success',
  position,
  isInStack = false,
  duration = 5000,
  children,
  styled,
  onClose,
  dismissible = false,
  showCloseButton = false,
  showProgressBar = false,
  ...props
}: ToasterProps): React.ReactNode => {
  const { color, ToasterComponent } = getToasterTypesStyles(typeToaster);

  const {
    visible,
    progress,
    closeToaster,
    handleMouseEnter,
    handleMouseLeave,
  } = useToaster({
    duration,
    onClose,
  });

  const closeButtonStyled = { color };
  const progressBarStyled = {
    backgroundColor: color,
    borderColor: color,
  };

  if (!visible) return null;

  return (
    <ToasterComponent
      data-testid="toaster"
      id={id}
      position={position}
      styled={styled}
      isInStack={isInStack}
      onClick={dismissible ? closeToaster : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
      {showCloseButton && (
        <CloseButton
          onClick={() => {
            closeToaster();
          }}
          styled={closeButtonStyled}
        />
      )}
      {showProgressBar && duration !== undefined && duration !== 0 && (
        <ProgressBar
          duration={duration}
          progress={progress}
          styled={progressBarStyled}
        />
      )}
    </ToasterComponent>
  );
};

export default Toaster;
