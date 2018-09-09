import React, {
    Component
} from 'react';

// Component styles
require('./home.scss');

// Actions
// import {
//     fetchApi
// } from './home.actions.js';

// Components
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';

/**
 * Represents Home container
 * @class
 */
class Home extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Header />
                <div></div>
                <Footer />
            </div>
        );
    }
}
export default Home;