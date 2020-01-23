const styles = () => ({
  fontFamily: 'sans-serif',

  heading: ({ context }) => ({
    backgroundColor: '#1E90FF',
    color: '#005A9C',
    padding: '1em',
    cursor: 'pointer',

    ':hover': {
      backgroundColor: '#01BFFF',
      color: '#FFFFFF'
    },
    
    ...(context.panel.open && {
      backgroundColor: '#00FFB2',
      color: '#FFFFFF'
    })
  }),

  content: ({ context }) => ({
    padding: '1em',
    color: '#444444',
    display: context.panel.open ? 'block' : 'none'
  })
});

const Accordion = ({ panels, ...props }) => {
  const [activeIndex, toggle] = useState(0);

  return (
    <Module name='Accordion' styles={styles} { ...props }>
      {panels.map(({ heading, content }, index) => (
        <Component name='panel' open={index === activeIndex}>
          <Component name='heading' onClick={() => toggle(index === activeIndex ? -1 : index)}>
            {heading}
          </Component>
          <Component name='content' content={content} />
        </Component>
      ))}
    </Module>
  );
}

export default Accordion;