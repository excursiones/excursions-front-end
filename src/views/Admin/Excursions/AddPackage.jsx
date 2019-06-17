import React from "react";
import GridContainer from "../../../components/Grid/GridContainer";
import AddIcon from "@material-ui/icons/Add";
import Button from "../../../components/CustomButtons/Button";
import Field from "../ShowInfo/Field";
import ExcursionField from "./ExcursionField";
import SaveButton from "../ShowInfo/SaveButton";
import HTTP from '../../../services/RestService';

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
        labelText: "State",
        id: "state"
    }
]

const excursionFields = [
    {
        labelText: "Excursion Id",
        id: "excursion-id"
    }
]


export default class AddPackage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            excursions: {}
        };
        this.excursionsId = {}
        this.data = {};
    }

    deleteExcursionField = (index) => {
        const excursions_aux = this.state.excursions;
        delete excursions_aux[index];
        delete this.excursionsId[index];
        this.setState({
            excursions: excursions_aux
        });
    }

    addExcursionHandler = () => {
        const excursions_aux = this.state.excursions;
        const keys = Object.keys(this.state.excursions);
        const index = keys.length === 0 ? 0 : keys[keys.length - 1] + 1;
        this.excursionsId[index] = "";
        excursions_aux[index] = (
            <ExcursionField
                key={index}
                fields={excursionFields}
                onDelete={this.deleteExcursionField}
                onChange={this.onExcursionFieldChange}
                requiredFields={excursionFields}
                index={index}
            />
        );
        this.setState({
            excursion: excursions_aux
        })
    }
    onExcursionFieldChange = (event, index) => {
        const { value } = event.target;
        (value !== this.excursionsId[index]) && (this.excursionsId[index] = value)
    }

    onChange = (event) => {
        const { name, value } = event.target;
        !this.data[name] && (this.data[name] = "");
        if (this.data[name.trim() === ""]) return;
        (this.data[name].trim() !== value) && (this.data[name] = value);
    }

    onSave = () => {
        Object.assign(this.data, { excursions: Object.values(this.excursionsId) });

        console.log(this.data);

    }

    render() {
        return (
            <div>
                <GridContainer>
                    {fields.map((field, index) => (
                        <Field
                            key={index}
                            labelText={field.labelText}
                            id={field.id}
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                onChange: this.onChange,
                                readOnly: false,
                                name: field.id
                            }}
                        />
                    ))}
                </GridContainer>
                {
                    Object.values(this.state.excursions).map((excursionField) =>
                        excursionField
                    )
                }
                <GridContainer>
                    <Button round onClick={this.addExcursionHandler} color="primary">
                        <AddIcon />
                        Excusrsion
                    </Button>
                </GridContainer>
                <SaveButton onSave={this.onSave} />
            </div>
        )
    }
}