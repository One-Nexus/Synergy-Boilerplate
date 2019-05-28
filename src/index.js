import '@onenexus/synergy';
import * as modules from './modules';
import theme from './themes/myTheme';

const App = ({ modules, theme }) => {
    Synergy.theme(modules, theme);

    return (
        <React.Fragment>
            <MyModule title='Title'>
                Lorem ipsum dolor sit amet
            </MyModule>

            <MyModule title='Title' highlight dismiss>
                Click the ✖ to dismiss panel
            </MyModule> 
        </React.Fragment>
    )
}

App.defaultProps = { theme, modules };

ReactDOM.render(<App />, document.getElementById('root'));

module.hot.accept();