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
import ExcursionReserv from 'views/User/Reservations/ExcursionReserv.jsx';

import {
  cardTitle,
  cardSubtitle,
  cardLink
} from "assets/jss/material-dashboard-react.jsx";

const styles = {
  cardTitle,
  cardSubtitle,
  cardLink
};

class Reservation extends React.Component {

  constructor() {
    super();
    this.state = {      
      cancelled: false,
      excursions: []           
    };
  } 

  componentDidMount (){
      Http.get(
        "",
        {
          query:
          "query { excursionById(id:" + this.props.id_excursion + ") {id name location description price }}"          
        },
        false,
        true
      ).then((response) => {
        console.log(response)
        const excursions = response.data.excursionById;
        this.setState({ excursions:excursions });      
      });
    }

  cancelar = () =>{ 
    Http.post(
      "",
      {
        query:
        "mutation { updateReservation(id:"+ this.props.id +",reservation:{ User_id:" + this.props.user_id + " Excursion_id:"+ this.props.id_excursion +" Type_id:" + this.props.id_type + " Cancelled: true }){Id Cancelled}}",
      },
      false,
      true
    ).then(() => {
      this.setState({ cancelled: true });
    });
 
  } 


  render() {
    const { classes } = this.props;
    return (
      <GridItem xs={8} sm={8} md={4}>
      <Card style={{ width: "20rem" }}>
        <CardBody>
          <h4 className={classes.cardTitle}>{this.props.created_at}</h4>
          <Muted>
            {this.props.cancelled ?
              <h6 className={classes.cardSubtitle}>Cancelada</h6>
              :null}   
            {this.state.cancelled ?
              <h6 className={classes.cardSubtitle}>Cancelada</h6>
              :null}                      
          </Muted>
          <p> 
          </p>          
        </CardBody>
        <Button color="info" id="btnCancelar" onClick={this.cancelar}>Cancelar</Button>
        {this.state.excursions.map((excursion) => {
              return <ExcursionReserv 
              key = {excursion.id}
              id = {excursion.id}
              title = {excursion.name}
              city = {excursion.location}
              description = {excursion.description}
              price = {excursion.price}
              duration = {excursion.duration}
              state = {excursion.state}
              />
            })} 
      </Card>
      </GridItem>
    );
  }
}

export default withStyles(styles)(Reservation);