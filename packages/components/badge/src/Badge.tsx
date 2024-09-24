import { BadgeProps } from './badge.types';
import { ReactNode } from 'react';
import {
  AlertBadge,
  NeutralBadge,
  SuccessBadge,
  WarningBadge,
} from './badgeTypes';

const badgeTypes = {
  alert: AlertBadge,
  neutral: NeutralBadge,
  success: SuccessBadge,
  warning: WarningBadge,
};

const Badge = ({
  typeBadge,
  count,
  position,
  size,
  children,
  styled,
  ...props
}: BadgeProps): ReactNode => {
  const BadgeComponent = badgeTypes[typeBadge ?? 'alert'];

  return (
    <BadgeComponent
      count={count}
      position={position}
      size={size}
      styled={styled}
      {...props}
    >
      {children}
    </BadgeComponent>
  );
};

export default Badge;
