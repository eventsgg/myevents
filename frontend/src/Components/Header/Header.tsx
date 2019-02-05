import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchBar from '../SearchBar/SearchBar';
import AuthBtn from '../AuthBtn/AuthBtn';
import MainMenu from '../MainMenu/MainMenu';
import mainMenuData from './MainMenuData.json';

interface HeaderProps {
    classes: {
        grow: string;
        headerShim: string;
    }
}

class Header extends Component<HeaderProps> {
    render() {
        return (
            <>
                <AppBar>
                    <Toolbar>
                        <Typography className={ this.props.classes.grow } color="inherit" variant="headline">
                            My events
                        </Typography>

                        <SearchBar/>

                        <AuthBtn/>
                    </Toolbar>
                </AppBar>

                <Toolbar className={ this.props.classes.headerShim }/>

                <MainMenu items={ mainMenuData.main_menu }/>
            </>
        )
    }
}

export default withStyles({
    grow: {
        flexGrow: 1
    },
    headerShim: {
        position: 'static'
    }
})(Header);