import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

const Smallbutton = (props) => {

    const useStyles = makeStyles(theme => ({
        button: {
          margin: theme.spacing(1),
        },
      }));
    
    const classes = useStyles()

    return(
        <Button
        variant={props.variant}
        color={props.color}
        size={props.size}
        className={classes.button}
        endIcon={<SendIcon/>}
        onClick={(e) => props.onClick(e)}
      >
        {props.children}
      </Button>
    )
}

export default Smallbutton