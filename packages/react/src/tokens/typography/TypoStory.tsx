import React from 'react';
import styled from '@emotion/styled';
import theme from '../themes/theme';
import { Breakpoints } from '../themes/theme.constants';

const Container = styled.div`
  font-family: ${theme.fontFamily};
  padding: ${theme.spaceUnit['spacing-16']};
`;

const Title = styled.h1`
  font-size: ${theme.typography[Breakpoints.DESKTOP_LARGE].title.title1
    .fontSize};
  margin-bottom: ${theme.spaceUnit['spacing-16']};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography[Breakpoints.DESKTOP_LARGE].title.title2
    .fontSize};
  margin-top: ${theme.spaceUnit['spacing-16']};
  margin-bottom: ${theme.spaceUnit['spacing-12']};
`;

const SubSectionTitle = styled.h3`
  font-size: ${theme.typography[Breakpoints.DESKTOP].title.title3.fontSize};
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
    </TypographyStyle>
  ));

const TypographyStory = () => (
  <Container>
    <Title>Typography Styles</Title>
    <SectionTitle>Header</SectionTitle>
    {renderTypographyStyles(theme.typography[Breakpoints.DESKTOP_LARGE].header)}
    <SubSectionTitle>Title</SubSectionTitle>
    {renderTypographyStyles(theme.typography[Breakpoints.DESKTOP].title)}
    <SubSectionTitle>Body</SubSectionTitle>
    {renderTypographyStyles(theme.typography[Breakpoints.TABLET].body)}
    <SubSectionTitle>Button</SubSectionTitle>
    {renderTypographyStyles(theme.typography[Breakpoints.MOBILE].button)}
    <SubSectionTitle>Links</SubSectionTitle>
    {renderTypographyStyles(theme.typography[Breakpoints.MOBILE].links)}
  </Container>
);

export default TypographyStory;
