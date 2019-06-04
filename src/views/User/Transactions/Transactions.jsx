import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { NavLink } from "react-router-dom";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class TransactionsUser extends React.Component {
  state = {
    value: 0,
    transactions_users: []
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  componentDidMount() {
    fetch(`http://192.168.99.101:5000/graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
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
      })
    })
      .then(res => res.json())
      .then(res => {
        for (var i = 0; i < res.data.allUserPayments.length; i++) {
          var data = Array.from(Object.values(res.data.allUserPayments[i]));
          this.setState(prevState => ({
            transactions_users: [...prevState.transactions_users, data]
          }));
        }
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Transactions</h4>
              </CardHeader>
              <CardBody>
                <NavLink to="/user/transaction-user-add">
                  <Button color="primary">Add transaction</Button>
                </NavLink>
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

TransactionsUser.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(TransactionsUser);
