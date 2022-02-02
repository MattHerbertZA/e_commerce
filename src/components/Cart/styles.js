import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    title: {
        marginBottom: '5%',
        justifyContent: 'center',
        display: 'flex',
    },
    emptyButton: {
        minWidth: '150px',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '5px',
        },
        [theme.breakpoints.up('xs')]: {
            marginRight: '20px',
        },
    },
    checkoutButton: {
        minWidth: '150px',
    },
    link: {
        textDecoration: 'none',
    },
    cartDetails: {
        display: 'flex',
        marginTop: '10%',
        width: '100%',
        justifyContent: 'center',
    },
    buttons: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        marginTop: "1%"
    }
}));