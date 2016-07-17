import React, { Component } from 'react';
import {IndexLink} from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };

        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleToggle() {
        this.setState({ open: !this.state.open });
    }

    handleClose() {
        this.setState({ open: false });
    }

    render() {
        return (
            <AppBar
                title="Yummly"
                onLeftIconButtonTouchTap={this.handleToggle}
                iconElementRight={
                    <IconMenu
                        iconButtonElement={
                            <IconButton><MoreVertIcon /></IconButton>
                        }
                        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                        >
                        <MenuItem primaryText="Refresh" />
                        <MenuItem primaryText="Help" />
                        <MenuItem primaryText="Sign out" />
                    </IconMenu>
                }>


                <Drawer
                    docked={false}
                    width={200}
                    onRequestChange={(open) => this.setState({ open }) }
                    open={this.state.open}>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>

            </AppBar>
        );
    }
}

export default Header;