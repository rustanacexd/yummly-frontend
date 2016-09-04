import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import {connect} from 'react-redux';
import {notificationUpdate} from '../../actions/ajaxStatusActions';

class Notification extends React.Component {
    render() {
        const {notification, notificationUpdate} = this.props;
        return (
            <Snackbar
                open={notification.open}
                message={notification.message}
                autoHideDuration={3000}
                onRequestClose={()=> {
                    notificationUpdate('', false);
                }}
                style={{left: 'auto'}}
            />
        );
    }
}

function mapStateToProps({notification}) {
    return {notification}
}

export default connect(mapStateToProps, {notificationUpdate})(Notification);
