import React from "react";
import Http from "services/RestService.jsx";

import Reservation from 'views/User/Reservations/Reservation.jsx';
import Grid from "@material-ui/core/Grid";
import CardHeader from "components/Card/CardHeader.jsx";
import Card from "components/Card/Card.jsx";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle";
import withStyles from "@material-ui/core/styles/withStyles";

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
      reservations: []           
    };
  }  

  componentDidMount (){
    Http.get(
      "",
      {
        query:
        'query { reservationsByUserId(User_id: "1"){Excursion_id Type_id Cancelled Created_at}}'
      },
      false,
      true
    ).then((response) => {
      console.log(response)
      const reservations = response.data.reservationsByUserId;
      this.setState({reservations});      
    });

  }   

  render() {  
    const { classes } = this.props;  
    return (
      <div> 
        <Card>
        <CardHeader color="primary">
                <h4 className={classes.cardTitle}>Reservations</h4>
        </CardHeader> 
        </Card>          
        <Grid>            
            {this.state.reservations.map((reservation) => {
              return <Reservation 
              key = {reservation.Id}
              id = {reservation.Id}
              fecha = {reservation.Created_at}
              user_id = {reservation.User_id}
              id_excursion = {reservation.Excursion_id}
              id_type = {reservation.Type_id}
              cancelled = {reservation.Cancelled} />
            })}                   
        </Grid>
      </div>        
    )
  }
}

export default withStyles(styles)(Reservations);


