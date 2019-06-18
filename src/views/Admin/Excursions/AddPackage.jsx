import React from "react";
import GridContainer from "../../../components/Grid/GridContainer";
import AddIcon from "@material-ui/icons/Add";
import Button from "../../../components/CustomButtons/Button";
import Field from "../ShowInfo/Field";
import ExcursionField from "./ExcursionField";
import SaveButton from "../ShowInfo/SaveButton";

import HTTP from '../../../services/RestService';
import { PackageFields } from "./ExcursionsPackagesFields";


export default class AddPackage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            excursions: {}
        };
        this.excursionsId = {};
        this.data = {};
    }

    deleteExcursionField = index => {
        const excursions_aux = this.state.excursions;
        delete excursions_aux[index];
        delete this.excursionsId[index];
        this.setState({
            excursions: excursions_aux
        });
    };

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
                fields={PackageFields.excursionFields}
                onDelete={this.deleteExcursionField}
                onChange={this.onExcursionFieldChange}
                requiredFields={PackageFields.excursionFields}
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

    onChange = event => {
        const { name, value } = event.target;
        !this.data[name] && (this.data[name] = "");
        if (this.data[name.trim() === ""]) return;
        this.data[name].trim() !== value && (this.data[name] = value);
    };

    onSave = () => {
        Object.assign(this.data, { excursions: Object.values(this.excursionsId) });
        HTTP.post("", {
            query: `
                mutation {
                    createPackage(_package: {
                        name: "${this.data.name}",
                        price: ${this.data.price},
                        excursions: [${this.data.excursions}],
                    }){
                        id_packages
                    }
                }
            `
        }).then(res => {
            console.log(res);
            res && alert("Package has been Created successfully");
        }).catch(err => {
            console.error(err);

        })

    }

    render() {
        return (
            <div>
                <GridContainer>
                    {PackageFields.fields.map((field, index) =>
                        (field.id !== "id_packages" && field.id !== "state") && (<Field
                            key={index}
                            labelText={field.labelText}
                            id={field.id}
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                onChange: this.onChange,
                                readOnly: false,
                                name: field.id,
                                type: field.type
                            }}
                        />)
                    )}
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