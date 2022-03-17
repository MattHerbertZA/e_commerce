import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        paddingLeft: 100,
        paddingRight: 100,
    },
    root: {
        flexGrow: 1,
    },
}));