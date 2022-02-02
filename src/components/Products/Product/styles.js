import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: '100%'
    },
    media: {
        height: 300,
        paddingTop: '56.25%', // 16:9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-start',
        // marginBottom: '-5%'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));