import React from 'react';
import styled from '@emotion/styled';
import theme from '../../theme/theme';

const handleFontSize = (spacing: string) => {
  switch (spacing) {
    case 'spacing8':
      return 'font-size: 0.625rem;';
    case 'spacing6':
      return 'font-size: 0.5rem;';
    case 'spacing4':
      return 'font-size: 0.375rem';
    default:
      return 'font-size: 0.75rem;';
  }
};

const Block = styled.div<{ spacing: string }>`
  width: ${({ spacing }) => spacing};
  height: 2rem;
  background-color: #d22da440;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.div<{ spacing: string }>`
  color: ${theme.colors.extended.pink.shade30};
  font-weight: ${theme.fontWeight.BOLD};
  ${({ spacing }) => handleFontSize(spacing)};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const SpacingStory: React.FC = () => {
  const spacingKeys = Object.keys(
    theme.spacing,
  ) as (keyof typeof theme.spacing)[];

  return (
    <Container>
      {spacingKeys.map(spacingKey => (
        <Block key={spacingKey} spacing={theme.spacing[spacingKey]}>
          <Label spacing={spacingKey}>{spacingKey.split('spacing')}</Label>
        </Block>
      ))}
    </Container>
  );
};

export default SpacingStory;
