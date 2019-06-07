import React from "react";
import axios from 'axios';
import $ from 'jquery'
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Muted from "components/Typography/Muted.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";

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

class CardTitlesTextLinks extends React.Component {

  constructor() {
    super();
    this.state = {      
      cancelled: false           
    };
  } 

  cancelar = (e) =>{      
/*     axios.put(`192.168.99.101:5000/reservations/${this.props.id}`, { cancelled: true })
    .then((response) => {
      console.log(response)  
      this.setState({cancelled: true});           
    })
    .catch(function (error) {
        console.log(error);
    });  */
  }
  detalle = (e) =>{      
    
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
        <Button color="info" id="btnDetalle" onClick={this.detalle}>Detalle</Button> 
      </Card>
      </GridItem>
    );
  }
}

export default withStyles(styles)(CardTitlesTextLinks);