import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const Emailfield = (props) => {

    const classes = makeStyles(theme => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: "80%",
          },
        },
      }));

    return(
                                    <TextField
                                        required
                                        id="filled-required"
                                        label="Email"
                                        name={props.name}
                                        value={props.value}
                                        type="email"
                                        className={classes.root}
                                        helperText={props.helperText}
                                        placeholder="We'll never share your email."
                                        variant={props.variant}
                                        onChange={(e) => props.onChange(e)}
                                        error={props.error}
                                        onBlur={(e) => props.onBlur(e)}
                                        style={{ width: "90%"}}
                                    />
    );
}

export default Emailfield;