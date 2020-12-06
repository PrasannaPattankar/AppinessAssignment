import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormHelperText from '@material-ui/core/FormHelperText';

const StandardPasswordfield = (props) => {

  // console.log(props)

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
    
      const classes = makeStyles(theme => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: "100%",
            color: 'red',
          },
        },
      }));
    
      const style = {
          color: "red"
      }

      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = event => {
        event.preventDefault();
      };

    return(
        <FormControl className={clsx(classes.root, classes.textField)} style={{ width: "90%"}}>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            name={props.name}
            label={props.label}
            variant={props.variant}
            value={props.value}
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            onChange={(e) => props.onChange(e)}
            onBlur={(e) => props.onBlur(e)}
            placeholder={props.placeholder}
            error={props.error}
            required={props.required}
            endAdornment={
              <InputAdornment variant={props.variant} position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText id="standard-password-help-text" style={style}>{props.FormHelperText}</FormHelperText>
        </FormControl>
    );
}

export default StandardPasswordfield;