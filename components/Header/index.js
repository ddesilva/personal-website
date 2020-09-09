import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  top: 0px;
  right: 0px;
`;

const Container = styled.div`
  max-width: 1200px;
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
  max-height: 100px;

  a {
    color: white;
    text-decoration: none;

    span {
      font-weight: 200;
    }
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 1;
  width: 350px;
  justify-content: space-evenly;
  margin-top: 90px;
  margin-bottom: 25px;

  a {
    color: white;
    text-decoration: none;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-size: 16px;

    :hover {
      border-bottom: 2px solid rgb(255, 0, 0);
    }
  }

  img {
    width: 70px;
    margin-top: -3px;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;
  margin-top: 75px;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
}));

function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goToLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/dilshan-de-silva-86639814';
  };
  const goAboutMe = () => {
    window.location.href = 'https://about.me/ddesilva';
  };

  const gotoGitHub = () => {
    window.location.href = 'https://github.com/ddesilva';
  };

  return (
    <Wrapper>
      <Container>
        <Title>
          <Link href={'/'}>
            <a>
              Dilshan <span>de Silva</span>
            </a>
          </Link>
        </Title>

        <MenuWrapper>
          <a href={'https://www.linkedin.com/in/dilshan-de-silva-86639814/'}>LinkedIn</a>
          <a href={'https://about.me/ddesilva'}>About</a>
          <a href={'https://steamcommunity.com/id/SchrodingersCat80'}>Steam</a>
          <a href={'https://github.com/ddesilva'}>
            <img src="github.fw.png" alt="" />
          </a>
        </MenuWrapper>

        <MobileMenu>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleClick}
            className={classes.menuButton}
          >
            <MenuIcon style={{fill: "white"}} />
          </IconButton>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={goToLinkedIn}>Linked In</MenuItem>
            <MenuItem onClick={goAboutMe}>About me</MenuItem>
            <MenuItem onClick={gotoGitHub}>GitHub</MenuItem>
          </Menu>
        </MobileMenu>
      </Container>
    </Wrapper>
  );
}

Header.propTypes = {};

export default Header;
