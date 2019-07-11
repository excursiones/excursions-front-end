import React from "react";

import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import DeleteElement from "../ShowInfo/DeleteElement";
import Field from "../ShowInfo/Field";

class AddDebt extends React.Component {

    deleteElement = (id) => {
        this.props.onDelete(id);
    }

    onChange = (event) => {
        this.props.onChange && this.props.onChange(this.props.index, event);
    }

    render() {

        return (
            <div>
                <GridContainer>
                    <GridItem md={10}>
                        <GridContainer >
                            {
                                this.props.fields.map((field, index) => (
                                    <Field key={index}
                                        labelText={field.labelText}
                                        id={field.id}
                                        formControlProps={{
                                            fullWidth: true,
                                            required: true
                                        }}
                                        inputProps={{
                                            readOnly: field.id === "id",
                                            onChange: this.onChange,
                                            name: field.id,
                                            required: true,
                                            type: field.type,
                                            defaultValue: this.props.data ? this.props.data[field.id] : null
                                        }}
                                    />
                                ))
                            }
                        </GridContainer>
                    </GridItem>
                    <GridItem md={2}>
                        <DeleteElement onClick={this.deleteElement} id={this.props.index} />
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default AddDebt;