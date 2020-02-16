import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Container } from '@onenexus/synergy';
import * as modules from './modules';
import theme from './themes/myTheme';

const App = () => (
  <Fragment>
    <Group>
      <MyModule title='Title'>
        Lorem ipsum dolor sit amet
      </MyModule>

      <MyModule title='Title' highlight dismiss>
        Click the ✖ to dismiss panel
      </MyModule>
    </Group>

    <Accordion panels={[
      {
        heading: 'accordion title 1 (click me)',
        content: 'lorem ipsum'
      },
      {
        heading: 'accordion title 2 (click me)',
        content: <span>foo bar</span>
      }
    ]} />
  </Fragment>
);

ReactDOM.render(
  <Container {...{ modules, theme, globals: { React, useState } }}>
    <App />
  </Container>, 
  document.getElementById('app')
);