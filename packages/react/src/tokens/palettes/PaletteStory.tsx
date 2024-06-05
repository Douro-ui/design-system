import React from 'react';
import styled from '@emotion/styled';
import colors from './palette';

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const SubSectionTitle = styled.h3`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ColorBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ColorName = styled.div`
  width: 150px;
  font-weight: bold;
`;

const ColorValue = styled.div`
  width: 100px;
  text-align: center;
`;

const ColorPreview = styled.div`
  width: 100px;
  height: 100px;
  margin-left: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const renderColors = colorGroup =>
  Object.entries(colorGroup).map(([name, value]) => (
    <ColorBlock key={name}>
      <ColorName>{name}</ColorName>
      <ColorValue>{value}</ColorValue>
      <ColorPreview style={{ backgroundColor: value }} />
    </ColorBlock>
  ));

const PaletteStory = () => (
  <Container>
    <Title>Storybook Design Tokens</Title>
    <SectionTitle>Colors (Table)</SectionTitle>
    <SubSectionTitle>Brand</SubSectionTitle>
    {renderColors(colors.brand)}
    <SubSectionTitle>Neutral</SubSectionTitle>
    {Object.entries(colors.neutral).map(([neutralCategory, neutralColors]) => (
      <div key={neutralCategory}>
        <SectionTitle>
          {neutralCategory.charAt(0).toUpperCase() + neutralCategory.slice(1)}
        </SectionTitle>
        {renderColors(neutralColors)}
      </div>
    ))}
    <SubSectionTitle>Extended</SubSectionTitle>
    {Object.entries(colors.extended).map(
      ([extendedCategory, extendedColors]) => (
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
