import React from 'react';
import styled from '@emotion/styled';
import theme from '../../theme/theme';
import { Theme, TypographyStyle } from '../../theme/theme.types';
import { Breakpoints } from '../../theme/theme.constants';

const getTypographyStyle = (
  typography:
    | Record<string, Record<string, TypographyStyle | undefined>>
    | undefined,
  category: string,
  breakpoint: Breakpoints,
): TypographyStyle | undefined => {
  return typography?.[category]?.[breakpoint];
};

const Container = styled.div`
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.display};
  padding: ${(props: { theme: Theme }) => props.theme.spaceUnit['spacing-16']};
`;

const TypographyPreview = styled.div`
  margin-bottom: ${(props: { theme: Theme }) =>
    props.theme.spaceUnit['spacing-24']};
`;

const Title = styled.h1`
  font-size: ${(props: { theme: Theme }) =>
    getTypographyStyle(
      props.theme.typography.heading,
      'title1',
      Breakpoints.DESKTOP_LARGE,
    )?.fontSize};
  margin-bottom: ${(props: { theme: Theme }) =>
    props.theme.spaceUnit['spacing-16']};
`;

const SectionTitle = styled.h2`
  font-size: ${(props: { theme: Theme }) =>
    getTypographyStyle(
      props.theme.typography.heading,
      'title2',
      Breakpoints.DESKTOP_LARGE,
    )?.fontSize};
  margin-top: ${(props: { theme: Theme }) =>
    props.theme.spaceUnit['spacing-16']};
  margin-bottom: ${(props: { theme: Theme }) =>
    props.theme.spaceUnit['spacing-16']};
`;

const BodyText = styled.p`
  font-size: ${(props: { theme: Theme }) =>
    getTypographyStyle(
      props.theme.typography.body,
      'body1',
      Breakpoints.DESKTOP_LARGE,
    )?.fontSize};
  line-height: ${(props: { theme: Theme }) =>
    getTypographyStyle(
      props.theme.typography.body,
      'body1',
      Breakpoints.DESKTOP_LARGE,
    )?.lineHeight};
  margin-bottom: ${(props: { theme: Theme }) =>
    props.theme.spaceUnit['spacing-16']};
`;

const TypographyItem = styled.div<TypographyStyle>`
  font-size: ${props => props.fontSize || 'inherit'};
  font-weight: ${props => props.fontWeight || 'inherit'};
  line-height: ${props => props.lineHeight || 'inherit'};
  margin-bottom: ${props => (props.theme as Theme).spaceUnit['spacing-08']};
`;

const renderTypographyPreview = (
  typography:
    | Record<string, Record<string, TypographyStyle | undefined>>
    | undefined,
  title: string,
) => {
  if (!typography) return null;

  return (
    <TypographyPreview theme={theme}>
      <h3>{title}</h3>
      {Object.entries(typography).map(([category, breakpoints]) => (
        <div key={category}>
          <h4>{category}</h4>
          {Object.entries(breakpoints).map(([breakpoint, style]) => (
            <TypographyItem key={breakpoint} theme={theme} {...style}>
              {`${category} - ${breakpoint}`}
            </TypographyItem>
          ))}
        </div>
      ))}
    </TypographyPreview>
  );
};

const TypoStoryStyles: React.FC = () => {
  return (
    <Container theme={theme}>
      <Title theme={theme}>This is the Title</Title>
      <SectionTitle theme={theme}>This is the Section Title</SectionTitle>
      <BodyText theme={theme}>
        This is some body text that will adjust based on the breakpoints defined
        in the theme.
      </BodyText>

      <h2>Typography Previews</h2>
      {renderTypographyPreview(theme.typography.heading, 'Heading')}
      {renderTypographyPreview(theme.typography.body, 'Body')}
      {renderTypographyPreview(theme.typography.display, 'Display')}
    </Container>
  );
};

export default TypoStoryStyles;
