import React, { Component } from "react";
import Header from "../src/component/Header/Header";
import Footer from "../src/component/Footer/Footer";

class Layout extends Component {

  render() {

    return (
      <div>
        <Header />
        {/* <Switch> */}
        {this.props.children}
        {/* </Switch> */}
        <Footer />
      </div>
    );
  }
}

export default Layout;
