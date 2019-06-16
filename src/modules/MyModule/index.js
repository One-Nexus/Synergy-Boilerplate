import layout from './layout';
import config from './config';

const MyModule = ({ title, dismiss, ...props }) => {
  const [isDismissed, setDismiss] = React.useState(false);

  return (
    <Module { ...props } isDismissed={isDismissed}>
      <Component name='heading'>
        {title} {dismiss && <Component name='close' onClick={() => setDismiss(true)}>✖</Component>}
      </Component>

      <Component name='content'>{props.children}</Component>
    </Module>
  );
};

MyModule.defaultProps = { name: 'MyModule' };

export default Object.assign(MyModule, { layout, config });