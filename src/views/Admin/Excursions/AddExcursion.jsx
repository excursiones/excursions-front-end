import React from "react";
import GridContainer from "../../../components/Grid/GridContainer";
import Field from "../ShowInfo/Field"
import SaveButton from "../ShowInfo/SaveButton";
import HTTP from "../../../services/RestService"

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

    constructor(props) {
        super(props)
        this.data = {}
    }

    onChange = (event) => {
        const { name, value } = event.target;
        ((typeof this.data[name] === "string") ? (value.trim() != this.data[name].trim()) : true) && (this.data[name] = value);
        (name === "name") && this.setState({
            name: value
        })
    }

    onSave = () => {
        console.log(this.data);
    }

    render() {
        return (
            <div>
                <GridContainer>
                    {fields.map((field, index) => (
                        <Field key={index}
                            labelText={field.labelText}
                            id={field.id}
                            formControlProps={{
                                fullWidth: true,
                                required: true
                            }}
                            inputProps={{
                                onChange: this.onChange,
                                name: field.id,
                                required: true,
                                multiline: (field.id === "description")
                            }}
                        />
                    ))}
                </GridContainer>
                <SaveButton onSave={this.onSave} />
            </div>
        )
    }
}