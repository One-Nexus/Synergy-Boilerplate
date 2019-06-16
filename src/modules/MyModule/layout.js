export default (element, config) => {
  const layout = {
    'display': 'inline-block',
    'width': `calc(50vw - ${config.gutter})`,

    'modifier(isDismissed)': {
      'display': 'none'
    },

    content: {
      'z-index': 0,
      'margin-top': `-${config.content['border-width']}`
    },

    close: {
      'float': 'right',
      'cursor': 'pointer'
    },

    nextSibling: [element.nextSibling, {
      'margin-left': config.gutter
    }],

    group: {
      'margin-bottom': config.gutter
    }
  };

  return [config, layout];
};