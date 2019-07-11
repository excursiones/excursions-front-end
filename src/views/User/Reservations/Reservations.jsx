import React from "react";
import Http from "services/RestService.jsx";
import Reservation from "views/User/Reservations/Reservation.jsx";
import auth from "../../../services/AuthService.jsx";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

var styles = {
  ...dashboardStyle,
  cardTitle: {
    marginTop: "0",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class Reservations extends React.Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      user_id: auth.getUserId()
    };
  }

  componentDidMount() {
    Http.post(
      "",
      {
        query: `query { allUserPendingReservations(id: ${
          this.state.user_id
        }){id id_excursion id_type cancelled created_at }}`
      },
      true,
      true
    ).then(response => {
      if(response.data.data == null) return;
      const reservations = response.data.data.allUserPendingReservations;
      this.setState({ reservations });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h4 className={classes.cardTitle}>Reservations</h4>
        <GridContainer>
          {(this.state.reservations || []).map((reservation, index) => {
            return (
              <GridItem xs={12} sm={6} md={5} lg={4} xl={3} key={index}>
                <Reservation
                  id={reservation.id}
                  fecha={reservation.created_at}
                  user_id={this.state.user_id}
                  id_excursion={reservation.id_excursion}
                  id_type={reservation.id_type}
                  cancelled={reservation.cancelled}
                  created_at={reservation.created_at}
                />
              </GridItem>
            );
          })}
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(Reservations);
