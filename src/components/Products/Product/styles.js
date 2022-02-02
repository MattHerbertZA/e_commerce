import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 250,
        paddingTop: '56.25%', // 16:9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
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