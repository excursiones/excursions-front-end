import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import ExcursionItem from "components/Excursions/ExcursionItem.jsx";

import Http from "../../../services/RestService.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tl: false,
      tc: false,
      tr: false,
      bl: false,
      bc: false,
      br: false,
      excursions: []
    };

    Http.post(
      "",
      {
        query: "query { allExcursions { id title:name price coordinates:location description } }"
      },
      false,
      true
    ).then(res => {
      console.log(res);
      this.setState({ excursions: res["data"]["data"]["allExcursions"] || [] });
    });
  }

  // to stop the warning of calling setState of unmounted component
  componentWillUnmount() {
    var id = window.setTimeout(null, 0);
    while (id--) {
      window.clearTimeout(id);
    }
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
  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>EXCURSIONES</h4>
          <p className={classes.cardCategoryWhite}>
            Disfruta tu viaje al máximo manteniéndote informado acerca de las
            mejores promociones para realizar durante tu estadía en el crucero.
            {"\n"} <br />
            <a target="_blank">
              ¡Aprovecha las espectaculares promociones que tenemos para ti y
              para tu familia!
            </a>
            .
          </p>
        </CardHeader>

        <CardBody>
          <GridContainer>
            {this.state.excursions != undefined &&
              this.state.excursions.map(excursion => (
                <GridItem
                  xs={12}
                  sm={6}
                  md={5}
                  lg={4}
                  xl={3}
                  key={excursion.title}
                >
                  <ExcursionItem {...excursion} />
                </GridItem>
              ))}
          </GridContainer>
          <br />
        </CardBody>
      </Card>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  excursions: PropTypes.object.isRequired
};

HomePage.defaultProps = {
  excursions: [
    {
      title: "Muralla de Cartagena",
      city: "Cartagena, CO",
      description: "Espectacular muralla",
      coordinates: { lat: 10.39972, lng: -75.51444 },
      price: "$150 USD"
    },
    {
      title: "Piscilago",
      city: "Melgar, CO",
      description: "Espectacular parque",
      coordinates: { lat: 10.39972, lng: -75.51444 },
      price: "$150 USD"
    },
    {
      title: "Monserrate",
      city: "Bogotá, CO",
      description: "Espectacular iglesia",
      coordinates: { lat: 10.39972, lng: -75.51444 },
      price: "$150 USD"
    },
    {
      title: "La Piscina",
      city: "Bogotá, CO",
      description: "Espectacular piscina",
      coordinates: { lat: 10.39972, lng: -75.51444 },
      price: "$150 USD"
    }
  ]
};

export default withStyles(styles)(HomePage);
