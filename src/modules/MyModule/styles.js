export default ({ theme, config, state }) => [config, {
  'margin-bottom': config.gutter,

  ...(Synergy.minWidth(theme.breakpoints.small) && {
    'display': 'inline-block',
    'width': `calc(50vw - ${config.gutter})`,
    'margin-bottom': 0,
    'margin-left': state.isFirstChild ? 0 : config.gutter
  }),

  ...(state.dismissed && {
    'display': 'none'
  }),

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
}];