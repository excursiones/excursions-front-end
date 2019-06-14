import React from "react";
import GridContainer from "../../../components/Grid/GridContainer";
import Field from "../ShowInfo/Field"
import SaveButton from "../ShowInfo/SaveButton";
import HTTP from "../../../services/RestService"
import { ExcursionFields } from "./ExcursionsPackagesFields";

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
        HTTP.post("", {
            query: `
                mutation {
                    createExcursion(excursion: {
                        name: "${this.data["name"]}",
                        price: ${this.data["price"]},
                        location: "${this.data["location"]}",
                        description: "${this.data["description"]}",
                        photo_path: "${this.data["photo_path"]}",
                        duration: ${this.data["duration"]}
                    }){
                        id
                    }
                }
            `
        }).then(
            alert("Excursion Created")
        ).catch(err => console.error(err)
        )
    }

    render() {
        return (
            <div>
                <GridContainer>
                    {ExcursionFields.fields.map((field, index) => (
                        ("id" !== field.id) && <Field key={index}
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