import type { CardProps } from './card.types';
import { CardStyled } from './card.styles';

const Card = ({
  backgroundColor,
  borderColor,
  borderRadius,
  width,
  height,
  ...props
}: CardProps) => {
  return (
    <CardStyled
      {...props}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      width={width}
      height={height}
    >
      {props.children}
    </CardStyled>
  );
};

export default Card;
