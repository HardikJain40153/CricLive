import React from 'react';
import './Navbar.css';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
const Navbar = () => {
	return(
		<AppBar position='static'>
		<Toolbar>
			<IconButton color='inherit'>
				<SportsCricketIcon />
			</IconButton>
			<Typography variant='h6'>Cricket Live Score </Typography>
			<Typography id ="nav" variant='h6'>Stay Home | Stay Safe</Typography>
		</Toolbar>
		</AppBar>
		);
}
export default Navbar;