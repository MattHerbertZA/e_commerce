import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: '80%',
    },
    media: {
        height: 150,
        paddingTop: '56.25%', // 16:9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
        // marginBottom: '-5%'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: 1000
    },
    iconButton: {
        // display: 'inline-block',
        padding: 0,
        minHeight: 0,
        minWidth: 0
    },
    price: {
        paddingBottom: 0,
        marginBottom: -30
    }
}));