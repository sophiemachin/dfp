import React from 'react';
import ReactDOM from 'react-dom/client';

import {ThemeProvider} from '@mui/material/styles';
import NavigationMenu from "./Menu";
import reportWebVitals from './reportWebVitals';
import {Routing} from "./Routing";
import {theme} from "./theme";

const style = {
  width: '100vw - 0px',
  backgroundColor: '#fcf8f0',
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <div style={style}>
          <NavigationMenu/>
          <Routing/>
          {/*<SimpleBottomNavigation/>*/}
        </div>
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
