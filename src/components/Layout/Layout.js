import Head from 'next/head';
import React from 'react';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Tech Anne</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
        @font-face {
          font-family: 'Uxum';
          src: url('/fonts/uxumgrotesque-ultra-webfont.woff2') format('woff2'),
            url('/fonts/uxumgrotesque-ultra-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'Uxum Italic';
          src: url('/fonts/uxumgrotesqueitalic-ultra-webfont.woff2')
              format('woff2'),
            url('/fonts/uxumgrotesqueitalic-ultra-webfont.woff') format('woff');
          font-weight: bold;
          font-style: normal;
        }

        @font-face {
          font-family: 'Clear sans';
          src: url('/fonts/ClearSans-Regular.woff') format('woff');
          font-weight: 600;
          font-style: normal;
        }

        @font-face {
          font-family: 'Clear sans Bold';
          src: url('/fonts/ClearSans-Bold.woff') format('woff');
          font-weight: bold;
          font-style: normal;
        }

        @font-face {
          font-family: 'Clear sans Bold Italic';
          src: url('/fonts/ClearSans-Bold-Italic.woff') format('woff');
          font-weight: 600;
          font-style: italic;
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Clear sans', sans-serif;
          text-rendering: geometricPrecision;
          overflow-x: hidden;
          background-color: #f4f3ec;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: 'Uxum';
        }

        * {
          box-sizing: border-box;
        }

        input,
        button {
          font-family: inherit;
        }

        .slick-slider .slick-prev:before,
        .slick-slider .slick-next:before {
          color: #d0dde9;
        }

        .slick-dots:after {
          content: 'deslize para ver mais';
          color: #fbc443;
          font-size: 12px;
          display: block;
          padding: 5px 0 0;
        }

        .slick-dots li button:before,
        .slick-dots li.slick-active button:before {
          color: #fbc443;
          font-size: 10px;
        }
      `}</style>
      {children}
    </>
  );
}

export default Layout;
