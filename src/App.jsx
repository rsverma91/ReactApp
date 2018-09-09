import React, { PureComponent } from 'react';

// Components
import Home from './components/Home/Home.jsx';

// Component styles
require('./app.scss');
class App extends PureComponent {
    render() {
        return (
            <Home />
        );
    }
}
export default App;