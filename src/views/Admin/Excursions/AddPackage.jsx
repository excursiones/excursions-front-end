import React from "react";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import CustomInput from "../../../components/CustomInput/CustomInput";
import AddIcon from "@material-ui/icons/Add";
import Button from "../../../components/CustomButtons/Button";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from "@material-ui/icons/Delete";

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

const AddExcursionToPackageFields = [
    {
        labelText: "Excursion Id",
        id: "excursion-id"
    }
]

class DeleteExcursionField extends React.Component {

    onClick = () => {
        this.props.onClick(this.props.index);
    }

    render() {

        return (
            <IconButton onClick={this.onClick} >
                <DeleteIcon />
            </IconButton>
        );
    }
}

const AddExcursionToPackage = ({ ...props }) => {

    return (
        <GridContainer>
            {AddExcursionToPackageFields.map((fields, index) => (
                <GridItem xs={12} sm={12} md={4} key={index}>
                    <CustomInput
                        labelText={fields.labelText}
                        id={fields.id}
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            readOnly: false,
                            defaultValue: "smthng"
                        }}
                    />
                </GridItem>
            ))}
            <GridItem>
                <DeleteExcursionField onClick={props.onClick} index={props.index} />
            </GridItem>
        </GridContainer>
    );
}

export default class AddPackage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            excursions: {}
        }
    }

    deleteExcursionField = (index) => {
        const excursions_aux = this.state.excursions;
        delete excursions_aux[index];
        this.setState({
            excursions: excursions_aux
        })
    }

    addExcursionHandler = () => {
        const excursions_aux = this.state.excursions;
        const keys = Object.keys(this.state.excursions);
        const index = keys.length === 0 ? 0 : keys[keys.length - 1] + 1;
        excursions_aux[index] = <AddExcursionToPackage onClick={this.deleteExcursionField} index={index} />;
        this.setState({
            excursion: excursions_aux
        })
    }

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
                                    defaultValue: "smthng",
                                    multiline: (fields.id === "description")
                                }}
                            />
                        </GridItem>
                    ))}
                </GridContainer>
                {
                    Object.values(this.state.excursions).map((excursionField) =>

                        excursionField
                    )
                }
                <GridContainer>
                    <Button round onClick={this.addExcursionHandler}>
                        <AddIcon />
                        Excusrsion
                    </Button>
                </GridContainer>
            </div>
        )
    }
}