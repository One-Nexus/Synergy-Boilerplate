import React, { useState } from 'react';

const styles = {
  'font-family': 'sans-serif',

  panel: panel => ([
    {
      condition: () => panel.is('open'),
      styles: {
        heading: {
          'background': '#00FFB2',
          'color': '#FFFFFF'
        }
      }
    }
  ]),

  heading: {
    'background': '#1E90FF',
    'color': '#005A9C',
    'padding': '1em',
    'cursor': 'pointer',
    ':hover': {
      'background': '#01BFFF',
      'color': '#FFFFFF'
    }
  },

  content: content => ({
    'padding': '1em',
    'color': '#444444',
    'display': content.parent('panel').is('open') ? 'block' : 'none'
  })
};

const Accordion = ({ panels }) => (
  <Module name='accordion' styles={styles}>
    {panels.map(({ heading, content }) => {
      const [isOpen, toggle] = useState(false);

      return (
        <Component name='panel' open={isOpen}>
          <Component name='heading' content={heading} onClick={() => toggle(!isOpen)} />
          <Component name='content' content={content} />
        </Component>
      )
    })}
  </Module>
);

export default Accordion;