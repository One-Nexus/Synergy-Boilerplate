export default ({ theme, config, state }) => {
  const layout = {
    ...(window.matchMedia(`(max-width: ${theme.breakpoints.small}`).matches ? {
      // styles for smaller screens
      'margin-bottom': state.isLastChild ? 0 : config.gutter
    } : {
      // styles for larger screens
      'display': 'inline-block',
      'width': `calc(50vw - ${config.gutter})`,
      'margin-left': state.isLastChild ? config.gutter : 0
    }),

    ...(state.isDismissed && {
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
  }

  return [config, layout];
}