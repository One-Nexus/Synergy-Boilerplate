export default (theme) => ({
  colors: {
    primary: 'dodgerblue',
    secondary: 'deepskyblue',
    tertiary: 'limegreen',
    quaternary: 'green'
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