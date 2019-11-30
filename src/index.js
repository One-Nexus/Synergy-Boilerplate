import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Synergy from '@onenexus/synergy';
import * as modules from './modules';
import theme from './themes/myTheme';

Object.assign(window, { React, ReactDOM, useState });

Synergy.init({ modules, theme });

const App = () => (
  <React.Fragment>
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
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));

module.hot.accept();