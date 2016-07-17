import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {loadUser} from '../../actions/userActions';
import ProfileForm from './ProfileForm';

class ProfilePage extends Component {

    componentWillMount() {
        this.props.loadUser(this.props.params.id);
    }

    render() {
        return (
            <div className="container">
                <h4 className="center">Profile</h4>
                <div className="center section">
                    <img style={{width: 200}}src={this.props.user.avatar} alt className="responsive-img circle" />
                </div>
                <ProfileForm user={this.props.user} />
            </div>

        );
    }
}

ProfilePage.propTypes = {

};

function mapStateToProps({user}) {
    return { user }
}

export default connect(mapStateToProps, { loadUser })(ProfilePage);