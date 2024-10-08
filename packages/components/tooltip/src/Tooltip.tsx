import { TooltipProps, TooltipStyledProps } from './tooltip.types';
import { TooltipStyled } from './tooltip.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useClickOutside, useTooltipVisibility } from './hooks';
import { handleEvents } from './utils/handleEvents';
import { calculatePosition } from './utils';

const Tooltip = ({
  styled,
  trigger = 'hover',
  position = 'top',
  children,
  childrenLabel,
  openDelay = 300,
  closeDelay = 0,
  isFixedBottom = false,
  ...props
}: TooltipProps): ReactNode => {
  const theme = useTheme();

  const defaultThemeValues: TooltipStyledProps = {
    color: theme.colors.brand.white,
    backgroundColor: theme.colors.brand.tertiary,
  };

  const mergedThemeValues = deepMerge<TooltipStyledProps>(
    defaultThemeValues,
    styled,
  );

  const { visible, showTooltip, hideTooltip, toggleTooltip } =
    useTooltipVisibility(openDelay, closeDelay);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const [coords, setCoords] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    if (visible && triggerRef.current && tooltipRef.current) {
      const tooltipPosition = calculatePosition({
        position,
        triggerRect: triggerRef.current.getBoundingClientRect(),
        tooltipRect: tooltipRef.current.getBoundingClientRect(),
        isFixedBottom,
      });
      setCoords(tooltipPosition);
    }
  }, [visible, position]);

  useClickOutside(tooltipRef, () => {
    if (visible) {
      hideTooltip();
    }
  });

  return (
    <div
      ref={triggerRef}
      {...handleEvents({ trigger, showTooltip, hideTooltip, toggleTooltip })}
    >
      <span>{childrenLabel}</span>
      {visible && (
        <TooltipStyled
          ref={tooltipRef}
          styled={mergedThemeValues as Required<TooltipStyledProps>}
          position={position}
          isFixedBottom={isFixedBottom}
          top={coords.top}
          left={coords.left}
          {...props}
        >
          {children}
        </TooltipStyled>
      )}
    </div>
  );
};

export default Tooltip;
