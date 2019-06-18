import React from "react";
import Field from "../ShowInfo/Field";

import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import DeleteElement from "../ShowInfo/DeleteElement";


export default class ExcursionField extends React.Component {

    constructor(props) {
        super(props);

        this.data = {}
    }

    onChange = (event) => {
        this.props.onChange(event, this.props.index)
    }

    deleteElement = (id) => {
        this.props.onDelete(id);
    }

    render() {
        return (
            <GridContainer>
                {this.props.fields.map((field, index) => (
                    <Field
                        key={index}
                        index={index}
                        labelText={field.labelText}
                        id={field.id}
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            readOnly: this.props.readOnlyFields ? (field.id === this.props.readOnlyFields[field.id] ? true : !this.state.edit) : false,
                            defaultValue: this.props.data ? this.props.data[field.id] : null,
                            onChange: this.onChange,
                            name: field.id,
                            type: field.type,
                            required: this.props.requiredFields ? (field.id === this.props.requiredFields[field.id]) : false
                        }} />))
                }
                <GridItem>
                    <DeleteElement onClick={this.deleteElement} id={this.props.index} />
                </GridItem>
            </GridContainer>
        )
    }
}