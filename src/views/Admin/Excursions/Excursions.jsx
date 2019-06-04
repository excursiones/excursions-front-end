import React from "react";

import CustomTabs from '../../../components/CustomTabs/CustomTabs';
import GridItem from '../../../components/Grid/GridItem';
import GridContainer from '../../../components/Grid/GridContainer';
import AddExcursion from "./AddExcursion";
import AddPackage from "./AddPackage";
import AllExcursions from "./ShowAllExcursions";
import AllPackages from "./ShowAllPackages";

const excursionTabs = [
    {
        tabName: "Add Excursion",
        tabContent: <AddExcursion />
    },
    {
        tabName: "Make a Package",
        tabContent: <AddPackage />
    },
    {
        tabName: "All Excursions",
        tabContent: <AllExcursions />
    },
    {
        tabName: "All Packages",
        tabContent: <AllPackages />
    }
];


class Excursions extends React.Component {

    render() {
        return (
            <div>

                <GridContainer>
                    <GridItem xs={false} md={4} sm={false} />
                    <GridItem xs={12} md={4} >
                        <h3>
                            Excursions
                    	</h3>
                    </GridItem >
                    <GridItem xs={false} md={4} sm={false} />
                </GridContainer>
                <CustomTabs
                    centered
                    headerColor="primary"
                    tabs={excursionTabs} >
                </CustomTabs>
            </div >
        );
    }
}


export default Excursions;