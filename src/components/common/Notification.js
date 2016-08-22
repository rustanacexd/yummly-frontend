import React from 'react';
import Snackbar from 'material-ui/Snackbar';


const Notification = ({message, open, onRequestClose}) => {
    return (
        <Snackbar
            open={open}
            message={message}
            autoHideDuration={100000}
            onRequestClose={onRequestClose}
            style={{left: 'auto'}}
        />
    );
};

export default Notification;
