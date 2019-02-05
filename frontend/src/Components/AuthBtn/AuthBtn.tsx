import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton'
import AuthIcon from '@material-ui/icons/AccountCircle';

export class AuthBtn extends Component {
    render() {
        return (
            <IconButton color="inherit">
                <AuthIcon/>
            </IconButton>
        )
    }
}