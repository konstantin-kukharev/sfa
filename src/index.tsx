import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import environment from './environment';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
    <ThemeProvider theme={environment.themes.dev}>
      <App preferences={environment.preferences}/>
    </ThemeProvider>
);