import { BadgeProps } from './badge.types';
import { ReactNode } from 'react';
import {
  AlertBadge,
  IconBadge,
  NeutralBadge,
  SuccessBadge,
  WarningBadge,
} from './badgeTypes';

const badgeTypes = {
  alert: AlertBadge,
  neutral: NeutralBadge,
  success: SuccessBadge,
  warning: WarningBadge,
  icon: IconBadge,
};

const Badge = ({
  typeBadge,
  count,
  icon,
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
      icon={icon}
      size={size}
      styled={styled}
      {...props}
    >
      {children}
    </BadgeComponent>
  );
};

export default Badge;
