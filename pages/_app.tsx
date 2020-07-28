import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';
import { customTheme } from '../theme';

function App(props: any) {
  const { Component, pageProps } = props;
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
