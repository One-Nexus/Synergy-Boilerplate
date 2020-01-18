import styles from './styles';
import config from './config';

const MyModule = ({ title, dismiss, ...props }) => {
  const [isDismissed, setDismiss] = useState(false);

  return (
    <Module isDismissed={isDismissed} {...props}>
      <Component name='title'>
        {title} {dismiss && <Component name='close' onClick={() => setDismiss(true)}>✖</Component>}
      </Component>

      <Component name='content'>{props.children}</Component>
    </Module>
  );
}

MyModule.defaultProps = { name: 'MyModule', styles, config }

export default MyModule;