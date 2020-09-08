import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from '../components/Header';
import ConditionallyRender from '../components/ConditionallyRender';
import BackgroundVideo from '../components/BackgroundVideo';

const GlobalStyle = createGlobalStyle`
  body {
    margin:0 !important;
    height: 100%;
 background: rgb(110,231,249);
background: linear-gradient(259deg, rgba(110,231,249,1) 0%, rgba(27,43,87,1) 100%); 
  }
  
   a {
    text-decoration: none;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <ConditionallyRender client>
        <BackgroundVideo />
      </ConditionallyRender>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
