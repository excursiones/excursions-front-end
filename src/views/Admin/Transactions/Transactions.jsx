import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { NavLink } from "react-router-dom";
import Http from "../../../services/RestService.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

require("isomorphic-fetch");

class Transactions extends React.Component {
  state = {
    value: 0,
    transactions_companies: [],
    transactions_users: []
  };

  componentDidMount() {
    Http.post(
      "",
      {
        query: `query{
allCompanyPayments {
  id
  company_id
  price
  date
  origin_account
  destination_account
}
}`
      },
      true,
      true
    ).then(res => {
      res = res["data"];
      for (var i = 0; i < res.data.allCompanyPayments.length; i++) {
        var data = Array.from(Object.values(res.data.allCompanyPayments[i]));
        this.setState(prevState => ({
          transactions_companies: [...prevState.transactions_companies, data]
        }));
      }
    });

    Http.post(
      "",
      {
        query: `query{
allUserPayments {
  id
  user_id
  price
  date
  origin_account
  destination_account
}
}`
      },
      true,
      true
    ).then(res => {
      res = res["data"];
      if (res.data == null || res.data.allUserPayments == null) return;
      for (var i = 0; i < res.data.allUserPayments.length; i++) {
        var data = Array.from(Object.values(res.data.allUserPayments[i]));
        this.setState(prevState => ({
          transactions_users: [...prevState.transactions_users, data]
        }));
      }
    });
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>
                  Companies transactions
                </h4>
              </CardHeader>
              <CardBody>
                <NavLink to="/admin/transaction-company-add">
                  <Button color="primary">Add transaction</Button>
                </NavLink>
                <Table
                  tableHeaderColor="primary"
                  tableHead={[
                    "ID",
                    "Company id",
                    "Price",
                    "Date",
                    "Origin Account",
                    "Destiny Account"
                  ]}
                  tableData={this.state.transactions_companies}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Users transactions</h4>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={[
                    "ID",
                    "User id",
                    "Price",
                    "Date",
                    "Origin Account",
                    "Destiny Account"
                  ]}
                  tableData={this.state.transactions_users}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Transactions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Transactions);
