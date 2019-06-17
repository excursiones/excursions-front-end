import React from "react";
import Http from "services/RestService.jsx";

import ShowAllAllies from "views/Admin/Allies/ShowAllAllies.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Card from "components/Card/Card.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import DateRange from "@material-ui/icons/DateRange";
import Exposure from "@material-ui/icons/Exposure";
import CardFooter from "components/Card/CardFooter.jsx";

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
    textDecoration: "none",    
  },
  cardSubTitle: {
    marginTop: "0",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    color: "Black"
  }
};


class AdminHome extends React.Component {  

  constructor() {
    super();
    this.state = {      
      Cuentas_por_pagar: 0,
      Intereses_por_pagar: 0           
    };
  } 
  
  componentDidMount (){
    Http.post(
      "",
      {
        query:
        "query { totalDebts { Total_ctas_por_pagar Total_Int_por_pagar}}"
      },
      false,
      true
    ).then((response) => {
      console.log(response)
      const debts = response.data.data.totalDebts;
      this.setState({Cuentas_por_pagar: debts.Total_ctas_por_pagar, Intereses_por_pagar: debts.Total_Int_por_pagar });      
    });

  }   

  render() {  
    const { classes } = this.props;  
    return (
      <div> 
        <Card>
        <CardHeader color="primary">
                <h4 className={classes.cardTitle}>Suppliers Debts</h4>
        </CardHeader>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}></GridItem>
          <GridItem xs={12} sm={6} md={3}>
          <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Exposure/>
                </CardIcon>
                <p className={classes.cardCategory}>Debts to pay</p>
                <h2 className={classes.cardSubTitle}>
                $ {this.state.Cuentas_por_pagar}</h2>                
              </CardHeader>              
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Curently
                </div>
              </CardFooter>
            </Card>            
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
          <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Exposure/>
                </CardIcon>
                <p className={classes.cardCategory}>Interest to pay</p>
                <h2 className={classes.cardSubTitle}>
                $ {this.state.Intereses_por_pagar}</h2>                
              </CardHeader>              
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Curently
                </div>
              </CardFooter>
            </Card>            
          </GridItem>
        </GridContainer>
       
        </Card>    
        <Card>
        <CardHeader color="primary">
                <h4 className={classes.cardTitle}>Suppliers</h4>
        </CardHeader> 
        <ShowAllAllies></ShowAllAllies>
        </Card>          
      </div>        
    )
  }
}

export default withStyles(styles)(AdminHome);


