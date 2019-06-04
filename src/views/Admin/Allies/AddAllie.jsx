import React from "react";

import CustomInput from "../../../components/CustomInput/CustomInput";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/CustomButtons/Button";
import IconButton from '@material-ui/core/IconButton';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import AddDebt from "./AddDebt";

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

class AddAllie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addDebt: false
        }
        this.debts = {};
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

    render() {
        return (
            <div>
                {/* ------------------------------------- col 1 ------------------------------------------------ */}
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4} >
                        <CustomInput
                            labelText="NIT"
                            id="NIT"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                required: true
                            }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} >
                        <CustomInput
                            labelText="Business Name"
                            id="business-name"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                disabled: false
                            }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} >
                        <CustomInput
                            labelText="Phone"
                            id="phone"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                disabled: false
                            }}
                        />
                    </GridItem>
                </GridContainer>
                {/* ------------------------------------- col 2 ------------------------------------------------ */}
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4} >
                        <CustomInput
                            labelText="Email"
                            id="email"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                disabled: false
                            }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} >
                        <CustomInput
                            labelText="Location"
                            id="location"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                disabled: false
                            }}
                        />
                    </GridItem>

                </GridContainer>
                {
                    Object.values(this.debts).map((add_debt) =>
                        add_debt
                    )
                }
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12} >
                        <Button round onClick={this.addDebtClick}>
                            <AddIcon />
                            Debt
                        </Button>
                    </GridItem>
                </GridContainer>

            </div>
        );
    }
}

export default AddAllie;