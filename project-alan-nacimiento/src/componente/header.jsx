import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { green } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
    title: {
        flexGrow: 15,
    },
    color: {
        backgroundColor: green[300],

    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <header className={classes.root}>
            <AppBar className={classes.color} position="static">
                <Toolbar className="dense">
                    <Typography variant="h6" className={classes.title}>
                        Company name
                    </Typography>
                    <Typography className={classes.root}>
                        <Link href="#" color="textPrimary">
                            FEATURES
                        </Link>
                        <Link href="#" color="textPrimary">
                            ENTERPRISE
                        </Link>
                        <Link href="#" color="textPrimary">
                            SUPPORT
                        </Link>
                    </Typography>
                    <Button variant="outlined" color="primary">Login</Button>
                </Toolbar>
            </AppBar>
        </header>
    );
}
