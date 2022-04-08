import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logohere.jpg'
import useStyles from './styles'

const Banner = () => {
    const classes = useStyles();
    const location = useLocation();
    return (
        <>
            <div className={classes.toolbar}> </div>
            <Toolbar className={classes.footer}>
                <Typography component={Link} to="/" variant='h6' className={classes.title} color='inherit'>
                    <div className={classes.test}>
                        <img src={logo} alt='Madz Business' height='250px' className={classes.image} />
                    </div>
                </Typography>
                <div className={classes.grow} />
            </Toolbar>
        </>
    )
};

export default Banner
