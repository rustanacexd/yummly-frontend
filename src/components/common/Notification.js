import React from 'react';
import Snackbar from 'material-ui/Snackbar';


const Notification = ({message, open, onRequestClose}) => {
    return (
        <Snackbar
            open={open}
            message={message}
            autoHideDuration={2000}
            onRequestClose={onRequestClose}
        />
    );
};

export default Notification;
