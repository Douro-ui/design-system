import React from 'react';
import styled from '@emotion/styled';
import theme from './theme';
import { Breakpoints } from './theme.constants';

const Container = styled.div`
  font-family: ${theme.fontFamily};
  padding: ${theme.spaceUnit['spacing-16']};
`;

const Title = styled.h1`
  font-size: ${theme.typography[Breakpoints.XXL].title.title1.fontSize};
  margin-bottom: ${theme.spaceUnit['spacing-16']};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography[Breakpoints.XXL].title.title2.fontSize};
  margin-top: ${theme.spaceUnit['spacing-16']};
  margin-bottom: ${theme.spaceUnit['spacing-12']};
`;

const SubSectionTitle = styled.h3`
  font-size: ${theme.typography[Breakpoints.XL].title.title3.fontSize};
  margin-top: ${theme.spaceUnit['spacing-12']};
  margin-bottom: 10px;
`;

const TypographyStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const TypographyName = styled.div`
  width: 150px;
  font-weight: bold;
`;

const TypographyValue = styled.div`
  width: 100px;
  text-align: center;
`;

const renderTypographyStyles = typographyGroup =>
  Object.entries(typographyGroup).map(([name, value]) => (
    <TypographyStyle key={name}>
      <TypographyName>{name}</TypographyName>
      <TypographyValue>{value.fontSize}</TypographyValue>
      {/* You can add more style properties here if needed */}
    </TypographyStyle>
  ));

const TypographyStory = () => (
  <Container>
    <Title>Typography Styles</Title>
    <SectionTitle>Header</SectionTitle>
    {renderTypographyStyles(theme.typography[Breakpoints.XXXL].header)}
    <SubSectionTitle>Title</SubSectionTitle>
    {renderTypographyStyles(theme.typography[Breakpoints.XXL].title)}
    <SubSectionTitle>Body</SubSectionTitle>
    {renderTypographyStyles(theme.typography[Breakpoints.LG].body)}
    <SubSectionTitle>Button</SubSectionTitle>
    {renderTypographyStyles(theme.typography[Breakpoints.MD].button)}
    <SubSectionTitle>Links</SubSectionTitle>
    {renderTypographyStyles(theme.typography[Breakpoints.MD].links)}
  </Container>
);

export default TypographyStory;
