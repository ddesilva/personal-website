import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import lodashGet from 'lodash.get';

const Video = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;

const StyledDiv = styled.div`
  animation: 2s fadeIn;
  animation-fill-mode: forwards;
  opacity: 0;
  z-index: 1;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      visibility: visible;
      opacity: 1;
    }
  }
`;


const CloudImage = styled.div`
  background-image: url('clouds2-flat.png');
  background-position: 11% 25%;
  background-repeat: no-repeat;
  background-size: 200px;

  display: block;
  height: 100%;
  width: 100%;

  position: fixed;
  transform: translatey(0px);

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(20px);
    }
    100% {
      transform: translatey(-0px);
    }
  }
  

  animation: float 8s ease-out infinite;

  @media only screen and (max-width: 768px) {
    display: none;
  }
  
   @media only screen and (min-width: 1500px) {
     background-position: 25% 25%;
  }
`;


const CloudImage2 = styled.div`
  background-image: url('clouds-flat.png');
  background-position: 85% 83%;
  background-repeat: no-repeat;
  background-size: 800px;

  display: block;
  height: 100%;
  width: 100%;

  position: fixed;
  transform: translatey(0px);

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(-0px);
    }
  }

  animation: float 8s ease-out infinite;

  @media only screen and (max-width: 768px) {
    display: none;
  }
  
  @media only screen and (min-width: 1500px) {
    background-position: 75% 75%;
  }
`;

const IslandImage = styled.div`
  background-image: url('island-flat.png');
  background-position:54% 97%;
  background-repeat: no-repeat;
  background-size:200px;

  display: block;
  height: 100%;
  width: 100%;

  position: fixed;
  transform: translatey(0px);

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(-0px);
    }
  }

  animation: float 8s ease-out infinite;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

class BackgroundVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: undefined,
      isMuted: undefined,
      progress: 0,
      currentTime: 0,
      duration: 0,
      windowWidth: props.window.innerWidth || 0,
      windowHeight: props.window.innerHeight || 0,
    };
  }

  componentDidMount() {
    this.script = document.createElement('script');
    this.script.src = '/vanta.birds.min.js';
    this.script.async = true;

    document.body.appendChild(this.script);
    this.script.addEventListener('load', this.init());
  }

  init = () => {
    setTimeout(() => {
      this.props.window.VANTA.BIRDS({
        el: '#background-animation',
        mouseControls: true,
        touchControls: true,
        minHeight: 1500.0,
        minWidth: 1500.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0xf242a,
        backgroundAlpha: 0,
        color1: 0x340c00,
        color2: 0xff0000,
        colorMode: 'lerpGradient',
        quantity: 5.00
      });
    }, 500);
  };

  componentWillUnmount() {
    this.props.window.removeEventListener('resize', this.handleResize);
    this.script && this.script.removeEventListener('load', function () {});
  }

  handleResize = () => {
    this.setState({
      windowWidth: this.props.window.innerWidth,
      windowHeight: this.props.window.innerHeight,
    });
  };

  render() {
    return (
      <Video>
        {/*<CloudImage2 />*/}
        {/*<CloudImage />*/}
        {/*<IslandImage />*/}
        <StyledDiv id={'cloud-animation'}></StyledDiv>
        <StyledDiv id={'background-animation'}></StyledDiv>
      </Video>
    );
  }
}

BackgroundVideo.propTypes = {
  window: PropTypes.object,
};

BackgroundVideo.defaultProps = {
  window: lodashGet(global, 'window', {}),
};

export default BackgroundVideo;
