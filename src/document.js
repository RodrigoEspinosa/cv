import React, { Fragment } from 'react'
import { Document, View, Font, Image } from '@react-pdf/renderer'
import styled from '@react-pdf/styled-components'
import cv from './cv'

const COLUMN_WIDTH = (1 / 12) * 100;

const Page = styled.Page`
  background-color: #fefefe;
`;

const YellowBlock = styled.View`
  top: 0;
  right: 0;
  left: 0;
  height: 30%;
  position: absolute;
  background-color: #f7ea34;
`;

const Content = styled.View`
  padding: 50px;
  margin-top: -50px;
  border-radius: 5px;
  background-color: #FFF;
  border: 1px solid #f0f0f0;
  margin-left: ${COLUMN_WIDTH}%;
  margin-right: ${COLUMN_WIDTH}%;
`;

const Hero = styled.View`
  align-items: center;
  width: ${COLUMN_WIDTH * 4}%;
  margin: 13% ${COLUMN_WIDTH * 4}%;
`;

const Logo = styled.View`
  position: relative;
`;

const REC = styled.Text`
  font-size: 60px;
  font-family: Helvetica-Bold;
  color: ${props => props.color};
  bottom: ${props => props.offset || 0}px;
  right: ${props => props.offset || 0}px;
  position: ${props => props.absolute && 'absolute'};
`;

const Subtitle = styled.Text`
  font-size: 15px;
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-family: Helvetica-Bold;
`;

const WorkPlace = styled.View`
  margin: 20px 0px;
`;

const CompanyLogo = styled.Image`
  height: 20px;
  margin-right: 10px;
`;

const Company = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const Role = styled.Text`
  font-size: 15px;
  margin-top: 5px;
  font-family: Helvetica-Bold;
`;

const RoleDate = styled.Text`
  color: #3c484d;
  font-size: 13px;
  font-family: Times-Roman;
`;

const WorkItem = styled.View`
  margin-top: 20px;
  padding: 6px 25px;
  border-left: 2px solid #00a8e8;
`;

const WorkItemTitle = styled.Text`
  font-size: 13px;
  margin-top: 5px;
  font-family: Helvetica-Bold;
`;

const WorkItemDescription = styled.Text`
  color: #3c484d;
  font-size: 13px;
  margin-top: 5px;
  font-family: Helvetica-Oblique;
`;

const App = () => (
  <Document>
    <Page size="A4" wrap>
      <YellowBlock />
      <Hero>
        <Logo>
          <REC color="#ce137a">rec</REC>
          <REC color="#f7ea34" offset={4} absolute>rec</REC>
        </Logo>
        <Subtitle>
          A developer's curriculum vitae
        </Subtitle>
      </Hero>
      <Content>
        {cv.map(section => (
          <Fragment key={section.title}>
            <SectionTitle>{section.title}</SectionTitle>
            {section.entries.map(entry => (
              <WorkPlace wrap={false} key={entry.id}>
                <Company>
                  {entry.image && <CompanyLogo src={entry.image} />}
                  <Role>{entry.title}</Role>
                </Company>
                <RoleDate>{entry.date}</RoleDate>
                {entry.items.map(item => (
                  <WorkItem key={item.id}>
                    <WorkItemTitle>{item.title}</WorkItemTitle>
                    <WorkItemDescription>{item.description}</WorkItemDescription>
                  </WorkItem>
                ))}
              </WorkPlace>
            ))}
          </Fragment>
        ))}
      </Content>
    </Page>
  </Document>
)

export default App;
