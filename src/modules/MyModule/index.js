import interactions from './interactions';
import layout from './layout';
import defaults from './config';

const MyModule = ({ title, content, dismiss, ...props }) => (
    <Module { ...props }>
        <Component name='heading'>
            {title} {dismiss && <Component name='close' onClick={interactions.dismiss}>✖</Component>}
        </Component>

        <Component name='content'>{props.children}</Component>
    </Module>
);

export default Object.assign(MyModule, {
    ...interactions, layout, defaults, defaultProps: {
        name: 'MyModule'
    }
});