import interactions from './interactions';
import layout from './layout';
import config from './config';

const MyModule = ({ title, dismiss, ...props }) => (
    <Module { ...props }>
        <Component name='heading'>
            {title} {dismiss && <Component name='close' onClick={interactions.dismiss}>✖</Component>}
        </Component>

        <Component name='content'>{props.children}</Component>
    </Module>
);

MyModule.defaultProps = { name: 'MyModule' };

export default Object.assign(MyModule, { layout, config });