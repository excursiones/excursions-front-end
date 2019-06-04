import React from "react";
import CustomInput from "../../../components/CustomInput/CustomInput";
import Switch from '@material-ui/core/Switch';
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Button from "../../../components/CustomButtons/Button";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AddDebt from "./AddDebt";


import HTTP from "../../../services/RestService";

const DeleteAllie = ({ ...props }) => {

    const onClick = () => {
        props.onClick(props.id);
    }

    return (
        <IconButton onClick={onClick} >
            <DeleteIcon />
        </IconButton>
    );
}

const DebtField = ({ ...props }) => {
    const {
        onClick,
        index
    } = props;

    return (
        <GridContainer>
            <GridItem md={10}>
                <AddDebt key={"debt-" + (index + 1)} />
            </GridItem>
            <GridItem md={2}>
                <DeleteDebtField onClick={onClick} index={index} />
            </GridItem>
        </GridContainer>
    );

}

class DeleteDebtField extends React.Component {

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

class AlliesPresentation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            addDebt: false,
            name: ""
        }
        this.debts = [];
    }

    componentDidMount() {
        this.setState((state, props) => ({
            name: props.data["name"]
        }))
    }

    deleteDebtField = (index) => {
        delete this.debts[index];
        this.setState({
            addDebt: true
        })
    }

    addDebtClick = () => {
        const keys = Object.keys(this.debts);
        const index = keys.length === 0 ? 0 : keys[keys.length - 1] + 1;
        this.debts[index] = (
            <DebtField index={index} onClick={this.deleteDebtField} />
        );
        this.setState({
            addDebt: true
        });
    }

    editSwitch = () => {
        this.setState((state) => ({
            edit: !state.edit,
        }))
    }

    deleteAllie = (id) => {
        console.log(id);

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
                                        this.state.edit ? (
                                            <DeleteAllie onClick={this.deleteAllie} id={123} />
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
                                {
                                    Object.values(this.debts).map((add_debt) =>
                                        add_debt
                                    )
                                }
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12} >
                                    <Button round onClick={this.addDebtClick}>
                                        <AddIcon />
                                        Debt
                                    </Button>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

export default AlliesPresentation;