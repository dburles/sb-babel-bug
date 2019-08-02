import { addDecorator, configure } from '@storybook/react';
import { ThemeProvider } from 'theme-ui';
import theme from '../src/theme';
import React from 'react';

const AppDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    {storyFn()}
  </ThemeProvider>
);

addDecorator(AppDecorator);

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
