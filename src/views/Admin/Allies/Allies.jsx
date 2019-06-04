import React from "react";

import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import CustomTabs from "../../../components/CustomTabs/CustomTabs";
import AddAllie from "./AddAllie";
import ShowAllAllies from "./ShowAllAllies";
import AddExcursion from "../Excursions/AddExcursion";
import Card from "../../../components/Card/Card"
import CardHeader from "../../../components/Card/CardHeader"
import CardBody from "../../../components/Card/CardBody"
import Typography from '@material-ui/core/Typography';



const alliesTabs = [
    {
        tabName: "Add Allie",
        tabContent: <AddAllie />
    },
    {
        tabName: "All Allies",
        tabContent: <ShowAllAllies />
    }
];

class Details extends React.Component {
    render() {

        return (
            <div>
                <Card>
                    <CardHeader color="primary">
                        ADD EXCURSION
                    </CardHeader>
                    <CardBody>
                        <AddExcursion />
                    </CardBody>
                </Card>
            </div>
        );
    }
}

class Allies extends React.Component {

    render() {
        return (
            <div>

                <GridContainer>
                    <GridItem xs={false} md={4} sm={false} />
                    <GridItem xs={12} md={4} >
                        <h3>
                            Allies
                    	</h3>
                    </GridItem >
                    <GridItem xs={false} md={4} sm={false} />
                </GridContainer>
                <CustomTabs
                    centered
                    headerColor="primary"
                    tabs={alliesTabs} >
                </CustomTabs>
                <Details />
            </div>
        );
    }

}

export default Allies;