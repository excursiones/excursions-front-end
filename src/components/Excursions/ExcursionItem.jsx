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
  }

  render() {
    const { classes } = this.props;

    return (
      <Card style={{ width: "20rem" }}>
        <Map
          className={classes.cardImgTop}
          data-src="holder.js/100px180/"
          alt="100%x180"
          data-holder-rendered="true"
          coordinates={this.props.coordinates}
        />
        <CardBody>
          <Typography variant="h5">{this.props.title}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {this.props.city}
          </Typography>
          <p>{this.props.description}</p>
          <div className={classes.textRight}>
            <Button color="danger">{this.props.price}</Button>
          </div>
        </CardBody>
      </Card>
    );
  }
}

ExcursionItem.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  coordinates: PropTypes.object.isRequired
};

ExcursionItem.defaultProps = {
  title: "Muralla de Cartagena",
  city: "Cartagena, CO",
  description: "Espectacular muralla",
  coordinates: { lat: 10.39972, lng: -75.51444 },
  price: "$150 USD"
};

export default withStyles(styles)(ExcursionItem);
