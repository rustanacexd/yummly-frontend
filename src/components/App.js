import React, {Component, PropTypes} from 'react';
import Header from './common/Header';
import Notification from '../components/common/Notification';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {children} = this.props;

        return (
            <div>
                <Header />
                {children}
                <Notification/>
            </div>
        );
    }
}


App.propTypes = {
    children: PropTypes.object.isRequired
};



export default App;
