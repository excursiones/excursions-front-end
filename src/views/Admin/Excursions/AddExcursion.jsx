import React from "react";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import CustomInput from "../../../components/CustomInput/CustomInput";

const fields = [
    {
        labelText: "Name",
        id: "name",

    },
    {
        labelText: "Price",
        id: "price"
    },
    {
        labelText: "Country",
        id: "country"
    },
    {
        labelText: "City",
        id: "city"
    },
    {
        labelText: "Description",
        id: "description"
    },
    {
        labelText: "Duration",
        id: "duration"
    },
    {
        labelText: "Capacity",
        id: "capacity"
    },
    {
        labelText: "Allie Id",
        id: "allie-id"
    }
]

export default class AddExcursion extends React.Component {

    render() {
        return (
            <div>
                <GridContainer>
                    {fields.map((fields, index) => (
                        <GridItem xs={12} sm={12} md={4} key={index}>
                            <CustomInput
                                labelText={fields.labelText}
                                id={fields.id}
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    readOnly: false,
                                    multiline: (fields.id === "description")
                                }}
                            />
                        </GridItem>
                    ))}
                </GridContainer>
            </div>
        )
    }
}