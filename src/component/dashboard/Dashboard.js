import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TableData from "../../json/employee.json";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { signIn } from "../../redux/actions/loginActions";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: TableData.user,
    };
  }

  render() {
    const columns = [
      {
        name: "id",
        label: "Id",
        options: {
          filter: true,
          sort: false,
          searchable: true,
        },
      },
      {
        name: "name",
        label: "Name",
        options: {
          filter: true,
          sort: false,
          searchable: true,
        },
      },
      {
        name: "age",
        label: "Age",
        options: {
          filter: true,
          sort: false,
          searchable: true,
        },
      },
      {
        name: "gender",
        label: "Gender",
        options: {
          filter: true,
          sort: false,
          searchable: true,
        },
      },
      {
        name: "email",
        label: "Email",
        options: {
          filter: true,
          sort: false,
          searchable: true,
        },
      },
      {
        name: "phoneNo",
        label: "Contact",
        options: {
          filter: true,
          sort: false,
          searchable: true,
        },
      },
    ];

    const data = this.state.data;

    const options = {
      // filterType: 'multiselect',
      responsive: "scroll",
      serverSide: false,
      pagination: true,
      // searchText: true,
      selectableRows: false,
      rowsPerPage: 5,
      rowsPerPageOptions: [5],
      rowHover: true,
      search: true,
    };

    const databaseTable = (
      <div
        style={{
            margin: 'auto',
            paddingTop: '7%',
            paddingBottom: '3%',
            paddingLeft: '2%',
            paddingRight: '2%',
            height: 'auto'
        }}
      >
        <MUIDataTable
          title={"Employee Details"}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    );

    return <div>{databaseTable}</div>;
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { signIn })(Dashboard);
