const styles = () => ({
  'font-family': 'sans-serif',

  heading: ({ context }) => ({
    backgroundColor: '#1E90FF',
    color: '#005A9C',
    padding: '1em',
    cursor: 'pointer',
    
    ...(context.panel.open && {
      backgroundColor: '#00FFB2',
      color: '#FFFFFF'
    }),

    ':hover': {
      backgroundColor: '#01BFFF',
      color: '#FFFFFF'
    }
  }),

  content: ({ context }) => ({
    padding: '1em',
    color: '#444444',
    display: context.panel.open ? 'block' : 'none'
  })
});

const Accordion = ({ panels, ...props }) => (
  <Module name='accordion' styles={styles} { ...props }>
    {panels.map(({ heading, content }) => {
      const [isOpen, toggle] = useState(true);

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