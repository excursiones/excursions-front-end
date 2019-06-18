import React from "react";
import Http from "services/RestService.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Muted from "components/Typography/Muted.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import ExcursionReserv from "views/User/Reservations/ExcursionReserv.jsx";

import {
  cardTitle,
  cardSubtitle,
  cardLink
} from "assets/jss/material-dashboard-react.jsx";

const styles = {
  cardTitle: {
    margin: "15px"
  },
  cardSubtitle: {
    margin: "5px"
  },
  cardLink
};

class Reservation extends React.Component {
  months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
  constructor(props) {
    super(props);
    this.state = {
      cancelled: false,
      excursions: [],
      date: new Date(Date.parse(props.created_at)) || null
    };
    this.cancelar = this.cancelar.bind(this);

    Http.post(
      "",
      {
        query:
          "query { excursionById(id:" +
          this.props.id_excursion +
          ") {id name location description price }}"
      },
      false,
      true
    ).then(response => {
      this.setState({
        excursions: response["data"]["data"]["excursionById"] || []
      });
    });
  }

  cancelar = () => {
    Http.post(
      "",
      {
        query: `mutation { cancelReservation(id:${this.props.id}) }`
      },
      false,
      true
    ).then(() => {
      this.setState({ cancelled: true });
    });
  };

  renderReservations() {
    if (Array.isArray(this.state.excursions)) {
      this.state.excursions.map(excursion => {
        return (
          <ExcursionReserv
            key={excursion.id}
            userid={this.userid}
            id={excursion.id}
            title={excursion.name}
            city={excursion.location}
            description={excursion.description}
            price={excursion.price}
            duration={excursion.duration}
            state={excursion.state}
          />
        );
      });
    } else {
      return (
        <ExcursionReserv
          key={this.state.excursions.id}
          userid={this.userid}
          id={this.state.excursions.id}
          title={this.state.excursions.name}
          city={this.state.excursions.location}
          description={this.state.excursions.description}
          price={this.state.excursions.price}
          duration={this.state.excursions.duration}
          state={this.state.excursions.state}
        />
      );
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <GridItem xs={8} sm={8} md={4}>
        <Card style={{ width: "20rem" }}>
          <h4 className={classes.cardTitle}>
            {`${
              this.months[this.state.date.getMonth()]
            } ${this.state.date.getDate()}, ${this.state.date.getFullYear()}`}
          </h4>
          <Muted>
            {this.props.cancelled ? (
              <h4 className={classes.cardSubtitle}>Cancelada</h4>
            ) : null}
            {this.state.cancelled ? (
              <h4 className={classes.cardSubtitle}>Cancelada</h4>
            ) : null}
          </Muted>
          <p />

          {this.renderReservations()}

          <Button color="info" id="btnCancelar" onClick={this.cancelar}>
            Cancelar
          </Button>
        </Card>
      </GridItem>
    );
  }
}

export default withStyles(styles)(Reservation);
