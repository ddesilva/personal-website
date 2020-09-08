import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SkillsTitle = styled.div`
  font-size: 5.5em;
  line-height: 1.2em;
  font-weight: bold;
  margin-top: -50px;
  margin-bottom: 25px;
  text-align: center;

  @media only screen and (max-width: 700px) {
    font-size: 1.5em;
  }
`;

const SkillsItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  img {
    height: 55px;
    margin-left: 40px;
    margin-right: 40px;
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      height: auto;
      width: 300px;
      margin-bottom: 50px;
    }
  }
`;

const Desc = styled.h2`
  font-size: 5.5em;
  line-height: 1.2em;
  font-weight: bold;
  margin-bottom: 60px;

  @media only screen and (max-width: 1200px) {
    font-size: 3.5em;
    text-align:center;
  }
`;

const DownIcon = styled.span`
  width: 50px;
  height: 50px;
  display: inline-block;
  background: url(/image-sprite.png) no-repeat -5px -250px;
  vertical-align: middle;
  margin-right: 1.0em;
  
`;

const CallToAction = styled.div`

  
  @media only screen and (max-width: 1200px) {
    text-align:center;
  }

  a {
    color: white;
    text-decoration: none;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: bold;
  }
`;

const WorkDisc = styled.div`
  font-size: 1.2em;
  margin-bottom: 40px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: bold;
`;

class Home extends Component {
  render() {
    return (
      <>
        <Container>
          <title>Dilshan de Silva</title>
          <main>
            <InnerWrapper>
              <Desc>
                I build websites
                <br /> in melbourne AU.
                <br />
              </Desc>

              <CallToAction>
                <a href="">
                  <DownIcon />
                  Learn more
                </a>
              </CallToAction>
            </InnerWrapper>
          </main>
        </Container>

        <Container>
          <main>
            <InnerWrapper>
              <SkillsTitle>Full stack developer using</SkillsTitle>
              <SkillsItems>
                <img src="/react.png" alt="" />
                <img src="/node.png" alt="" />
                <img src="/adobe.fw.png" alt="" />
                <img src="/aws.png" alt="" />
              </SkillsItems>
            </InnerWrapper>
          </main>
        </Container>
      </>
    );
  }
}

export default Home;
