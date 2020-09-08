import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  top: 0px;
  right: 0px;
`;

const Container = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 1200px) {
    padding-left: 40px;
  }
`;

const Title = styled.h1`

  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 2em;
  margin-top: 80px;
  z-index: 1;
  max-height:100px;

  a {
    color: white;
    text-decoration: none;
  }

  :before {
    content: '';
    width: 19px;
    display: block;
    height: 3px;
    background: rgb(255, 0, 0);
    top: 40px;
    position: relative;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 1;
  width: 350px;
  justify-content: space-evenly;
  margin-top: 90px;
    max-height:100px;

  a {
    color: white;
    text-decoration: none;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-size: 16px;
  }
  
  img {
    width:70px;
    margin-top:-3px;
  }
  
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Title>
            <Link href={'/'}>
              <a>Dilshan de Silva </a>
            </Link>
          </Title>

          <Menu>
            <a href={'https://www.linkedin.com/in/dilshan-de-silva-86639814/'} target={'blank'}>
              LinkedIn
            </a>
            <a href={'https://about.me/ddesilva'} target={'blank'}>
              About
            </a>
            <a href={'https://steamcommunity.com/id/SchrodingersCat80'} target={'blank'}>
             Steam
            </a>
            <a href={'https://github.com/ddesilva'} target={'blank'}>
             <img src="github.fw.png" alt="" />
            </a>
          </Menu>
        </Container>
      </Wrapper>
    );
  }
}

Header.propTypes = {};

export default Header;
