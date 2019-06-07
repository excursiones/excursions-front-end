import React, { Component } from 'react'
import axios from 'axios';
// core components
import Reservation from 'views/User/Reservations/Reservation.jsx';
import Grid from "@material-ui/core/Grid";


export default class Reservations extends Component {  

  constructor() {
    super();
    this.state = {      
      reservations: []           
    };
  }  

  componentDidMount (){
/*    axios.get(`192.168.99.101:3000/reservations/1`)
    .then((response) => {
        console.log(response)
        const reservations = response.data;
        this.setState({reservations});
        
    })
    .catch(function (error) {
        console.log(error);
    });  */
  }   

  render() {    
    return (
      <div> 
           
        <Grid>            
            {this.state.reservations.map((reservation) => {
              return <Reservation 
              key = {reservation.id}
              id = {reservation.id}
              fecha = {reservation.created_at}
              user_id = {reservation.id_user}
              id_excursion = {reservation.id_excursion}
              id_type = {reservation.id_type}
              cancelled = {reservation.cancelled} />
            })}                   
        </Grid>
      </div>        
    )
  }
}




