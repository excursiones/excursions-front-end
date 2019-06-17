import React from "react";
import GridItem from "../../../components/Grid/GridItem";
import CustomInput from "../../../components/CustomInput/CustomInput";

export default class Field extends React.Component {

    render() {
        return (
            <GridItem xs={12} sm={12} md={4} key={this.props.index}>
                <CustomInput
                    labelText={this.props.labelText}
                    id={this.props.id}
                    formControlProps={this.props.formControlProps}
                    inputProps={this.props.inputProps}
                />
            </GridItem>
        )
    }
}