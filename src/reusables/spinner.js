import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = () => {

    const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
          '& > * + *': {
            marginLeft: theme.spacing(2)
          },
        },
        style: {
            width: "50px",
            height: "50px",
            top: "50%",
            left: "50%",
            position: "fixed"
          },
      }));
    
    const classes = useStyles()

    return(
        <div className={classes.style}>
            <CircularProgress
            />
        </div>
    )
}

export default Spinner