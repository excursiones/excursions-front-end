import React from "react";
import PropTypes from "prop-types";

import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import cardImagesStyles from "assets/jss/material-dashboard-react/cardImagesStyles.jsx";
import { Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Http from "../../services/RestService";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import auth from "../../services/AuthService";

const mapStyle = require("./map_style.json");

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC-szFfNWHNXmifSB0KbR1G-DLw-6WVgNk",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `250px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={11}
    defaultOptions={{ styles: mapStyle }}
    defaultCenter={props.coordinates}
  >
    {props.isMarkerShown && <Marker position={props.coordinates} />}
  </GoogleMap>
));

const styles = {
  cardImagesStyles,
  textCenter: {
    textAlign: "center"
  },
  textRight: {
    textAlign: "right"
  }
};

class ExcursionItem extends React.Component {
  constructor(props) {
    super(props);
    this.createBooking = this.createBooking.bind(this);
    this.state = {
      buttonColor: "danger"
    };
  }

  showNotification(place) {
    var x = [];
    x[place] = true;
    this.setState(x);
    this.alertTimeout = setTimeout(
      function() {
        x[place] = false;
        this.setState(x);
      }.bind(this),
      6000
    );
  }

  createBooking(e) {
    e.preventDefault();

    Http.post(
      "",
      {
        query: `mutation { createReservation(reservation: { id_user: "${auth.getUserId()}" id_excursion: "${this.props.id}" id_type: "2" cancelled: false }) { id} }`
      },
      false,
      true
    ).then(() => {
      this.setState({ buttonColor: "success" });
      this.showNotification("tl");
    });
  }

  render() {
    const { classes } = this.props;
    var coord = {};
    try {
      coord = JSON.parse(this.props.coordinates);
    } catch (e) {
      coord = { lat: 10.39972, lng: -75.51444 };
    }

    return (
      <Card style={{ width: "20rem" }}>
        <Snackbar
          place="tl"
          color="info"
          message="Su excursión ha sido reservada con éxito"
          open={this.state.tl}
          closeNotification={() => this.setState({ tl: false })}
          close
        />

        <Map
          className={classes.cardImgTop}
          data-src="holder.js/100px180/"
          alt="100%x180"
          data-holder-rendered="true"
          coordinates={{ lat: coord["lat"], lng: coord["lng"] }}
        />
        <CardBody>
          <Typography variant="h5">{this.props.title}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {this.props.city}
          </Typography>
          <p>{this.props.description}</p>
          <div className={classes.textRight}>
            <Button
              color={this.state.buttonColor}
              onClick={this.createBooking}
              disabled={this.state.buttonColor == "success"}
            >
              $ {this.props.price} USD
            </Button>
          </div>
        </CardBody>
      </Card>
    );
  }
}

ExcursionItem.propTypes = {
  id: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  // coordinates: PropTypes.object.isRequired,
  // status: PropTypes.object.isRequired
};

ExcursionItem.defaultProps = {
  title: "Muralla de Cartagena",
  city: "Cartagena, CO",
  description: "Espectacular muralla",
  coordinates: { lat: 10.39972, lng: -75.51444 },
  price: "$150 USD"
};

export default withStyles(styles)(ExcursionItem);
