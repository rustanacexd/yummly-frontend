import CircularProgress from 'material-ui/CircularProgress';

export default (loading) => {
    if (loading) {
        return (
            <CircularProgress size={2}
                style={{ position: 'absolute', top: '45%', left: '45%', zIndex: '999' }}
                />
        );
    }
};
