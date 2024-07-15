import React from 'react';
import styled from '@emotion/styled';
import { brand, neutral, extended } from './palette';
import theme from '../../theme/theme';

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: ${theme.spaceUnit['spacing-32']};
`;

const Title = styled.h1`
  font-size: ${theme.fontSize * 1.5}rem;
  margin-bottom: ${theme.spaceUnit['spacing-20']};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.fontSize * 1.25}rem;
  margin-top: ${theme.spaceUnit['spacing-20']};
  margin-bottom: ${theme.spaceUnit['spacing-08']};
`;

const SubSectionTitle = styled.h3`
  font-size: ${theme.fontSize * 1.125}rem;
  margin-top: ${theme.spaceUnit['spacing-08']};
  margin-bottom: ${theme.spaceUnit['spacing-08']};
`;

const ColorBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spaceUnit['spacing-08']};
`;

const ColorName = styled.div`
  width: ${theme.spaceUnit['spacing-40']};
  font-weight: bold;
`;

const ColorValue = styled.div`
  width: ${theme.spaceUnit['spacing-32']};
  margin-left: ${theme.spaceUnit['spacing-64']};
  text-align: center;
`;

const ColorPreview = styled.div`
  width: ${theme.spaceUnit['spacing-32']};
  height: ${theme.spaceUnit['spacing-32']};
  margin-left: ${theme.spaceUnit['spacing-64']};
  border-radius: ${theme.spaceUnit['spacing-06']};
  border: 1px solid #ddd;
`;

interface ColorGroup {
  [key: string]: string;
}

const renderColors = (colorGroup: ColorGroup) =>
  Object.entries(colorGroup).map(([name, value]) => (
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
    {Object.entries(neutral).map(([neutralCategory, neutralColors]) => (
      <div key={neutralCategory}>
        <SectionTitle>
          {neutralCategory.charAt(0).toUpperCase() + neutralCategory.slice(1)}
        </SectionTitle>
        {renderColors(neutralColors)}
      </div>
    ))}
    <SubSectionTitle>Extended</SubSectionTitle>
    {Object.entries(extended).map(([extendedCategory, extendedColors]) => (
      <div key={extendedCategory}>
        <SectionTitle>
          {extendedCategory.charAt(0).toUpperCase() + extendedCategory.slice(1)}
        </SectionTitle>
        {renderColors(extendedColors)}
      </div>
    ))}
  </Container>
);

export default PaletteStory;
