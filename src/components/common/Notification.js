import React from 'react';
import Snackbar from 'material-ui/Snackbar';



const Notification = ({message, open}) => {
    return (
        <Snackbar
            open={open}
            message={message}
            autoHideDuration={2000}
        />
    );
};

export default Notification;
