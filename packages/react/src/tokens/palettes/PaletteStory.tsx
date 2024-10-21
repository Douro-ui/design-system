import React from 'react';
import styled from '@emotion/styled';
import { brand, neutral, extended } from './palette';
import theme from '../../theme/theme';

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: ${theme.spacing.spacing32};
`;

const Title = styled.h1`
  font-size: '${theme.typography.heading.h1.desktop.fontSize}rem';
  margin-bottom: ${theme.spacing.spacing20};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.heading.h2.desktop.fontSize}rem;
  margin-top: ${theme.spacing.spacing20};
  margin-bottom: ${theme.spacing.spacing8};
`;

const SubSectionTitle = styled.h3`
  font-size: ${theme.typography.heading.h3.desktop.fontSize}rem;
  margin-top: ${theme.spacing.spacing8};
  margin-bottom: ${theme.spacing.spacing8};
`;

const ColorBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.spacing8};
`;

const ColorName = styled.div`
  width: ${theme.spacing.spacing40};
  font-weight: bold;
`;

const ColorValue = styled.div`
  width: ${theme.spacing.spacing32};
  margin-left: ${theme.spacing.spacing64};
  text-align: center;
`;

const ColorPreview = styled.div`
  width: ${theme.spacing.spacing32};
  height: ${theme.spacing.spacing32};
  margin-left: ${theme.spacing.spacing64};
  border-radius: ${theme.spacing.spacing6};
  border: 1px solid #ddd;
`;

interface ColorGroup {
  [key: string]: string;
}

const renderColors = (colorGroup: ColorGroup) =>
  Object.entries(colorGroup).map(([name, value]: [string, string]) => (
    <ColorBlock key={name}>
      <ColorName>{name}</ColorName>
      <ColorValue>{value}</ColorValue>
      <ColorPreview style={{ backgroundColor: value }} />
    </ColorBlock>
  ));

const PaletteStory: React.FC = () => (
  <Container>
    <Title>Storybook Design Tokens</Title>
    <SectionTitle>Colors (Table)</SectionTitle>
    <SubSectionTitle>Brand</SubSectionTitle>
    {renderColors(brand)}
    <SubSectionTitle>Neutral</SubSectionTitle>
    {Object.entries(neutral).map(
      ([neutralCategory, neutralColors]: [string, ColorGroup]) => (
        <div key={neutralCategory}>
          <SectionTitle>
            {neutralCategory.charAt(0).toUpperCase() + neutralCategory.slice(1)}
          </SectionTitle>
          {renderColors(neutralColors)}
        </div>
      ),
    )}
    <SubSectionTitle>Extended</SubSectionTitle>
    {Object.entries(extended).map(
      ([extendedCategory, extendedColors]: [string, ColorGroup]) => (
        <div key={extendedCategory}>
          <SectionTitle>
            {extendedCategory.charAt(0).toUpperCase() +
              extendedCategory.slice(1)}
          </SectionTitle>
          {renderColors(extendedColors)}
        </div>
      ),
    )}
  </Container>
);

export default PaletteStory;
