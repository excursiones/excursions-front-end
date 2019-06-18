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
import auth from "../../../services/AuthService.jsx";

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
      excursions: [],
      reservations: [],
      user_id: auth.getUserId()
    };

    Http.post(
      "",
      {
        query:
          "query { allExcursions { id title:name price coordinates:location description } }"
      },
      false,
      true
    ).then(res => {
      if (
        res["data"] == null ||
        res["data"] == undefined ||
        res["data"]["data"] == null ||
        res["data"]["data"] == undefined
      )
        return;

      this.setState({ excursions: res["data"]["data"]["allExcursions"] || [] });
      Http.post(
        "",
        { query: `query { allReservations { id id_user id_type cancelled } }`},
        true,
        true
      ).then(res => {
        if (res["data"]["data"] == null) return;

        res["data"]["data"]["allReservations"].forEach(item => {
          if (item["id_user"] == this.state.user_id) {
            this.setState(prevState => ({
              reservations: [...prevState.reservations, item]
            }));
          }
        });
      });
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
  excursions: []
};

export default withStyles(styles)(HomePage);
