import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <meta
            name="keywords"
            content="freelance melbourne web developer, freelance melbourne web designer"
          />
          <meta
            name="description"
            content="Freelancer web designer and web developer based in melbourne with over 8 years of industry experience."
          />

          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Dilshan de Silva - Freelance web developer Melbourne and freelance web designer Melbourne "
          />
          <meta
            property="og:keywords"
            content="freelance web designer, web development, freelance website design, melbourne victoria"
          />
          <meta
            property="og:description"
            content="A melbourne based freelancer web designer and web developer with over 8 years of industry experience."
          />
          <meta property="og:url" content="http://www.ddesilva.com" />
          <meta property="og:site_name" content="Dilshan de Silva" />
          <meta
            property="og:image"
            content="http://www.ddesilva.com/images/ddesilva_1328784103_4.jpg"
          />
        </Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/110/three.min.js"></script>

        <Main />
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
