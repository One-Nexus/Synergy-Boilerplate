export default ({ element, config, state }) => {
  const layout = {
    'display': 'inline-block',
    'width': `calc(50vw - ${config.gutter})`,
    'margin-left': !state.isFirstChild ? config.gutter : 0,

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

    group: {
      'margin-bottom': config.gutter
    }
  };

  return [config, layout];
};