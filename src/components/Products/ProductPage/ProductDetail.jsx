import React from 'react'
import useStyles from './styles'
import { Typography } from '@material-ui/core';


const ProductDetail = () => {

    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.sideImg}>
                <Typography>This is where the image will be </Typography>


            </div>
            <div className={classes.productInfo}>
                <Typography>This is where the Info will be </Typography>

            </div>

        </main>
    )
}

export default ProductDetail