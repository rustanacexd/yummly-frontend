import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import NavFilter from '../common/NavFilter';
import CircularProgress from 'material-ui/CircularProgress';


class HomePage extends Component {
  render() {
    if (this.props.loading) {
     return <CircularProgress size={2} style={{ position: 'absolute', top: '45%', left: '45%', zIndex: '999' }}/>
    }
    
    return (
      <div>
        <NavFilter recipes={this.props.recipes} />
      </div>
    );
  }
}

HomePage.propTypes = {

};

function mapStateToProps({recipes, ajaxCallsInProgress}, ownProps) {
  return { recipes, loading: ajaxCallsInProgress > 0 }
}

export default connect(mapStateToProps)(HomePage);