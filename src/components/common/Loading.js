import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Loading = ({loading = true}) => {
    if (loading) {
        return (
            <CircularProgress size={2}
                style={{ position: 'fixed', top: '45%', left: '45%', zIndex: '999' }}/>
        );
    }
    return <div></div>
};

export default Loading;