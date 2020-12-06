import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { signIn } from "../../redux/actions/loginActions";
import Emailfield from "../../reusables/emailTextField";
import StandardPasswordfield from "../../reusables/standardPassword";
import { withRouter } from "react-router-dom";
import "./login.scss";
import Smallbutton from "../../reusables/smallButton";
import Spinner from "../../reusables/spinner";
import Data from "../../json/loginData.json";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameOrEmail: "",
      password: "",
      usernameError: "",
      passwordError: "",
      emailValid: true,
    };
  }

  change = (e) => {
    let isError = false;
    // script();
    const errors = {
      usernameError: "",
      passwordError: "",
    };

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      ...errors,
    });

    return isError;
  };

  emailValid = (e) => {
    // console.log(e.target.value);
    if (
      this.state.usernameOrEmail !== "" &&
      this.state.usernameOrEmail !== "hruday@gmail.com"
    ) {
      const Email_Id = e.target.value;
      console.log(Email_Id);
    }
  };

  validate = () => {
    let isError = false;

    const errors = {
      usernameError: "",
      passwordError: "",
    };

    if (this.state.usernameOrEmail === "") {
      isError = true;
      errors.usernameError = "enter email address";
    }

    if (
      this.state.usernameOrEmail !== Data.username &&
      this.state.usernameOrEmail !== ""
    ) {
      isError = true;
      errors.usernameError = "invalid email";
    }

    if (this.state.password === "") {
      isError = true;
      errors.passwordError = "enter password";
    }

    if (this.state.password !== Data.password && this.state.password !== "") {
      isError = true;
      errors.passwordError = "invalid password";
    }

    this.setState({
      ...this.state,
      ...errors,
    });

    return isError;
  };

  handeleSubmit = (e) => {
    e.preventDefault();

    const { history } = this.props;

    const err = this.validate();
    // console.log(err);
    if (!err) {
      const userData = {
        usernameOrEmail: this.state.usernameOrEmail,
        password: this.state.password,
      };
      this.props.signIn(userData);
    }
    history.push("/dashboard");
  };

  render() {
    const { isAuthenticated, loading } = this.props.auth;

    const loginContent = (
      <div className="login-page">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="login-page-form login100-form container wrapper fadeInDown">
          <div className="loginv " id="formContent">
            <form>
              <p className="title">signIn</p>
              <div className="signin-container">
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <Emailfield
                      variant="standard"
                      placeholder="email address"
                      value={this.state.username}
                      // type="email"
                      name="usernameOrEmail"
                      label="email address"
                      onChange={this.change}
                      onBlur={this.emailValid}
                      error={this.state.usernameError ? true : false}
                      helperText={this.state.usernameError}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-6">
                    <StandardPasswordfield
                      placeholder="password"
                      // className=" fadeIn third"
                      name="password"
                      label="Password"
                      variant="standard"
                      value={this.state.password}
                      onChange={this.change}
                      onBlur={this.validate}
                      error={this.state.passwordError ? true : false}
                      FormHelperText={this.state.passwordError}
                      required="true"
                    />
                  </div>
                </div>
              </div>
              <Smallbutton
                variant="outlined"
                color="primary"
                onClick={(e) => this.handeleSubmit(e)}
                size="small"
              >
                Login
              </Smallbutton>
              <div id="formFooter">
                {/* <p
                  className="underlineHover"
                  style={{ color: "#000", textAlign: "center" }}
                  onClick={this.routeFP}
                >
                  Don't remember your password
                </p> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    );

    return loginContent;
  }
}

Login.propTypes = {
  signIn: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default withRouter(connect(mapStateToProps, { signIn })(Login));
