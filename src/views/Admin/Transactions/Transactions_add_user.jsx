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
import TextField from "@material-ui/core/TextField";
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
import { bugs, website, server } from "variables/general.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { NavLink } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class TransactionsUserAdd extends React.Component {
  state = {
    user: 21,
    price: "",
    or_account: "",
    fn_account: ""
  };

  handleChange = (event, val) => {
    this.setState({ value: event.target.value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  handleSubmitForm = () => {
    var query =
      `mutation {
                  createUserPayment(user_payment: {
                    user_id: ` +
      this.state.user +
      ` price: ` +
      this.state.price +
      ` origin_account: "` +
      this.state.or_account +
      `" destination_account: "` +
      this.state.fn_account +
      `"}) {
                    id
                  }
                }`;
    fetch(`http://3.130.38.243:5000/graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: query
      })
    }).then((window.location.href = "http://localhost:3000/user/transactions"));
  };
  handleChangeSp = (ent, val) => {
    this.setState({ [ent]: val.target.value });
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Add transaction</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} md={6} sm={12}>
                    <CustomInput
                      labelText="User ID"
                      id="company"
                      formControlProps={{
                        fullWidth: true
                      }}
                      value={this.state.company}
                      inputProps={{
                        onChange: (e, value) => this.handleChangeSp("user", e),
                        type: "number"
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} md={6} sm={12}>
                    <CustomInput
                      labelText="Price"
                      id="price"
                      formControlProps={{
                        fullWidth: true
                      }}
                      value={this.state.price}
                      inputProps={{
                        onChange: (e, value) => this.handleChangeSp("price", e),
                        type: "number"
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} md={6} sm={12}>
                    <CustomInput
                      labelText="Origin account"
                      id="o_account"
                      formControlProps={{
                        fullWidth: true
                      }}
                      value={this.state.or_account}
                      inputProps={{
                        onChange: (e, value) =>
                          this.handleChangeSp("or_account", e)
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} md={6} sm={12}>
                    <CustomInput
                      labelText="Final account"
                      id="f_account"
                      formControlProps={{
                        fullWidth: true
                      }}
                      value={this.state.fn_account}
                      inputProps={{
                        onChange: (e, value) =>
                          this.handleChangeSp("fn_account", e)
                      }}
                    />
                  </GridItem>
                </GridContainer>

                <Button color="success" onClick={this.handleSubmitForm}>
                  Add transaction
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

TransactionsUserAdd.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(TransactionsUserAdd);
