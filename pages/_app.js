import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/theme';
import Layout from '../src/components/Layout/Layout';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
