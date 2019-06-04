import React from "react";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from '@material-ui/core/IconButton';
import CustomInput from "../../../components/CustomInput/CustomInput";
import AddIcon from "@material-ui/icons/Add";
import Button from "../../../components/CustomButtons/Button";

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

const DeleteField = ({ ...props }) => {
    const onClick = () => {
        props.onClick(props.id);
    }
    return (
        <IconButton onClick={onClick} >
            <DeleteIcon />
        </IconButton>
    );

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

export default class PackageDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            excursions: {},
            name: ""
        }
    }

    componentDidMount() {
        this.setState((state, props) => ({
            name: props.data["name"]
        }))
    }

    editSwitch = () => {
        this.setState((state) => ({
            edit: !state.edit
        }))
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
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>
                            {this.props.data["name"]}
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div>
                            <GridContainer>
                                <GridItem xs={6} sm={6} md={2}>
                                    Edit <Switch onChange={this.editSwitch} />
                                </GridItem>
                                <GridItem xs={false} sm={false} md={8} />
                                <GridItem xs={6} sm={6} md={2}>
                                    {
                                        this.state.edit ? (
                                            <DeleteField onClick={this.deleteAllie} id={123} />
                                        ) : (
                                                null
                                            )
                                    }
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                {this.props.fields.map((field, index) => (
                                    <GridItem xs={12} sm={12} md={4} key={index}>
                                        <CustomInput
                                            labelText={field.labelText}
                                            id={field.id}
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                readOnly: field.id === "id" ? true : !this.state.edit,
                                                defaultValue: this.props.data[field.id]
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
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}