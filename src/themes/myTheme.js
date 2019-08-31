export default (theme) => ({
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
        'with-highlight': {
          'background-color': () => theme.colors.tertiary,
          'border-color': () => theme.colors.quaternary
        }
      }
    }
  }
});