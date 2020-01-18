export default {
  colors: {
    primary: 'dodgerblue',
    secondary: 'deepskyblue',
    tertiary: 'limegreen',
    quaternary: 'green'
  },
  breakpoints: {
    small: '640px',
    medium: '960px',
    large: '1200px'
  },
  modules: {
    MyModule: {
      title: {
        '$-is-highlight': {
          'background-color': theme => theme.colors.tertiary,
          'border-color': theme => theme.colors.quaternary
        }
      }
    }
  }
}