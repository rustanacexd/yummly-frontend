import React, {Component, PropTypes} from 'react';

class ProfilePage extends Component {
    render() {
        return (
            <div className="container">
                <h4 className="center">Profile</h4>
                <div className="center section">
                    <img src="http://placehold.it/250/250/" alt className="responsive-img circle" />
                </div>
                <div className="section">
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12 m6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="first_name" type="text" className="validate" />
                                    <label htmlFor="first_name">First Name</label>
                                </div>
                                <div className="input-field col s12 m6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="last_name" type="text" className="validate" />
                                    <label htmlFor="last_name">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 m6">
                                    <i className="material-icons prefix">email</i>
                                    <input id="email" type="email" className="validate" />
                                    <label htmlFor="email" data-error="wrong" data-success="right">Email Address</label>
                                </div>
                                <div className="input-field col s12 m6">
                                    <i className="material-icons prefix">lock_outline</i>
                                    <input id="password" type="password" className="validate" />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 m4">
                                    <i className="material-icons prefix">contact_phone</i>
                                    <input id="phone" type="text" className="validate" />
                                    <label htmlFor="phone">Phone</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <i className="material-icons prefix">http</i>
                                    <input id="website" type="text" className="validate" />
                                    <label htmlFor="website">Website</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <i className="material-icons prefix">work</i>
                                    <input id="company" type="text" className="validate" />
                                    <label htmlFor="company">Company</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 m3">
                                    <input id="street" type="text" className="validate" />
                                    <label htmlFor="street">Street</label>
                                </div>
                                <div className="input-field col s12 m3">
                                    <input id="city" type="text" className="validate" />
                                    <label htmlFor="city">City</label>
                                </div>
                                <div className="input-field col s12 m3">
                                    <input id="zipcode" type="text" className="validate" />
                                    <label htmlFor="zipcode">Zipcode</label>
                                </div>
                                <div className="input-field col s12 m3">
                                    <input id="country" type="text" className="validate" />
                                    <label htmlFor="country">Country</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

ProfilePage.propTypes = {

};

export default ProfilePage;