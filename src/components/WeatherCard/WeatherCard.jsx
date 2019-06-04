import React from "react";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import cardImagesStyles from "assets/jss/material-dashboard-react/cardImagesStyles.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Muted from "components/Typography/Muted";

import Http from "../../services/RestService.jsx";
import LocationService from "../../services/LocationService";

const months = [
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

const styles = {
  ...cardImagesStyles,
  textWhite: {
    "&, & *": {
      color: "#FFF"
    }
  }
};

class WeatherCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: { temp: "No disponible" },
      weather: [{ description: "No disponible" }],
      city: "No disponible"
    };

    var location = new LocationService();
    location.getCurrentCity().then(response => {
      Http.get(
        "http://api.openweathermap.org/data/2.5/weather?lat=" +
          response["lat"] +
          "&lon=" +
          response["lon"] +
          "&appid=470b92429409fc998257a258c1a4c6fb&lang=es&units=metric&cnt=1",
        null,
        false,
        false
      ).then(res => {
        this.setState({
          temperature: res["data"]["main"] || { temp: "No disponible" },
          weather: res["data"]["weather"][0] || [
            { description: "No disponible" }
          ],
          city: response["city"] || "No disponible"
        });
      });
    });
  }

  getCurrentDate() {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    return ` ${`${months[month]}`}, ${date}`;
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card style={{ width: "98%", "marginLeft": "2px" }}>
          <CardBody>
            <h4 className={classes.cardTitle} style={{ margin: "4px" }}>
              {this.state.city}
            </h4>
            <Muted>
              <h6 className={classes.cardSubtitle} style={{ margin: "2px" }}>
                {this.getCurrentDate()}
              </h6>
            </Muted>
            <Divider />

            <br />

            <Grid container spacing={8}>
              <Grid item xs={3}>
                <img
                  alt={this.state.weather["description"]}
                  style={{ height: "50px", width: "50px" }}
                  src={
                    "http://openweathermap.org/img/w/" +
                    (this.state.weather["icon"] || "10d") +
                    ".png"
                  }
                  aspectRatio={2 / 1}
                />
              </Grid>

              <Grid item xs={9}>
                <Typography variant="caption">Pronóstico:</Typography>
                <Typography variant="subtitle2">
                  {this.state.weather["description"]}
                </Typography>
              </Grid>
            </Grid>
          </CardBody>
        </Card>
        <br />
      </div>
    );
  }
}

WeatherCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WeatherCard);
