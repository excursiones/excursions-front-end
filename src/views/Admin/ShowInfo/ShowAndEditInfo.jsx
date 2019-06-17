import React from "react";
import PropTypes from 'prop-types';

import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Switch from '@material-ui/core/Switch';

import Field from "./Field";
import DeleteElement from "./DeleteElement";
import SaveButton from "./SaveButton";


export default class ShowAndEditInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            name: ""
        }
        this.data = {}
        this.props.data && Object.assign(this.data, this.props.data);
    }

    componentDidMount() {
        this.setState((state, props) => ({
            name: props.data["name"]
        }))
    }

    deleteElement = (id) => {
        this.props.onDelete(id);
    }

    editSwitch = () => {
        this.setState((state) => ({
            edit: !state.edit
        }))
    }

    onChange = (event) => {
        const { name, value } = event.target;

        ((typeof this.data[name] === "string") ? (value.trim() !== this.data[name].trim()) : true) && (this.data[name] = value);
        (name === "name") && this.setState({
            name: value
        })
    }

    onSave = () => {
        this.props.onSave && this.props.onSave(this.props.id, this.data);
    }

    render() {
        return (
            <div>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>
                            {this.state.name}
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
                                        this.state.edit &&
                                        <DeleteElement onClick={this.deleteElement} id={this.props.id} />
                                    }
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                {this.props.fields && this.props.fields.map((field, index) => (
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
                                            required: this.props.requiredFields ? (field.id === this.props.requiredFields[field.id]) : false
                                        }}
                                    />
                                ))}
                            </GridContainer>
                            <GridContainer>
                                <GridItem sm={12} xs={12} md={10}>
                                    {
                                        this.props.children
                                    }
                                </GridItem>
                            </GridContainer>
                            {this.state.edit && (
                                <SaveButton onSave={this.onSave} label={this.props.saveButtonLabel || "save"} />
                            )}
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}

ShowAndEditInfo.propTypes = {
    id: PropTypes.number,
    data: PropTypes.object,
    fields: PropTypes.arrayOf(PropTypes.object),
    readOnlyFields: PropTypes.object,
    onDelete: PropTypes.func,
    onSave: PropTypes.func
}