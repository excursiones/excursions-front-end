import React from "react";

import AddDebt from "./AddDebt";
import ShowAndEditInfo from "../ShowInfo/ShowAndEditInfo";
import { AlliesFields, DebtsFields } from "./AlliesFields";

import HTTP from "../../../services/RestService";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/CustomButtons/Button";
import GridContainer from "../../../components/Grid/GridContainer";
import SaveButton from "../ShowInfo/SaveButton";
import AddIcon from "@material-ui/icons/Add";


class AlliesPresentation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            accountField: null,
            name: ""
        }
        this.account = {};
        this.data = {};
        Object.assign(this.data, this.props.data);
    }

    componentDidMount() {
        HTTP.post("", {
            query: `
            query {
                supplierAccount(id: ${this.data.id}) {
                    id
                    Cuentas_pagadas
                    Cuentas_por_pagar
                    Intereses_por_pagar
                }
              }
            `
        }).then(response => {
            if (response.data.data) {
                const { supplierAccount } = response.data.data;
                this.account.id = supplierAccount.id;
                for (const key in supplierAccount) {
                    if (supplierAccount.hasOwnProperty(key)) {
                        this.account[DebtsFields.parseToView[key]] = supplierAccount[key];
                    }
                }
                console.log(this.account);
                this.setState({
                    accountField: (<AddDebt
                        key={"Account"}
                        data={this.account}
                        fields={this.props.debtFields}
                        onDelete={this.deleteDebtField}
                        onChange={this.onDebtFieldChange}
                    />)
                })
            }

        }).catch(error => {
            console.error(error);
        })
    }

    deleteDebtField = () => {
        (this.account.id) && (

            HTTP.post("", {
                query: `
                mutation {
                    deleteAccount (id: ${this.account.id})
                }
                `
            }).then(_ => {
                alert("Account Deleted")
            }).catch(err => {
                console.error(err);
            }
            )
        );
        this.account = {};
        this.setState({
            accountField: null
        });
        console.log(this.state);

    }

    onDebtFieldChange = (index, event) => {
        const { name, value } = event.target;

        this.account[name] = value;
        console.log(this.account);

    }

    addDebtClick = () => {
        const debtField = (
            <AddDebt
                key={"debt_field"}
                fields={this.props.debtFields}
                onDelete={this.deleteDebtField}
                onChange={this.onDebtFieldChange}
            />);
        this.setState({
            accountField: debtField
        });
    }

    editSwitch = () => {
        this.setState((state) => ({
            edit: !state.edit,
        }))
    }

    deleteAllie = (id) => {
        HTTP.post("", {
            query: `
                mutation {
                    deleteSupplier (id: ${this.data.id})
                }
            `
        }).then(resp => {
            alert("Allie Deleted")
        }).catch(err => {
            console.error(err);

        })
        this.props.onDelete(id)
    }

    onSave = (id, data) => {
        const debt = this.account;
        HTTP.post("", {
            query: `
                        mutation {
                            ${debt.id ? "updateAccount" : "createAccount"} (${debt.id ? "id: " + debt.id + ", " : ""} account: {
                                Cuentas_por_pagar: ${debt[DebtsFields.parseToView["Cuentas_por_pagar"]]},
                                Cuentas_pagadas: ${debt[DebtsFields.parseToView["Cuentas_por_pagar"]]},
                                Intereses_por_pagar: ${debt[DebtsFields.parseToView["Intereses_por_pagar"]]},
                                supplier_id: ${this.data.id}
                            }) {
                                id
                            }
                        }
                    `
        }).then(res => {
            console.log(res);

            this.account.id = res.data.data[debt.id ? "updateAccount" : "createAccount"].id;
        }).catch(err => {
            console.error(err);

        });

        Object.assign(this.data, data);
        HTTP.post("", {
            query: `
            mutation {
                updateSupplier (id: ${this.props.data.id}, supplier:{
                    Codigo: ${this.data[AlliesFields.parseToView["Codigo"]]},
                    Nit: ${this.data[AlliesFields.parseToView["Nit"]]},
                    Razon: "${this.data[AlliesFields.parseToView["Razon"]]}",
                    Telefono:"${this.data[AlliesFields.parseToView["Telefono"]]}",
                    Correo: "${this.data[AlliesFields.parseToView["Correo"]]}",
                    Ubicacion: "${this.data[AlliesFields.parseToView["Ubicacion"]]}"
                  }) {
                  id
                  Codigo
                  Nit
                  Razon
                  Telefono
                  Correo
                  Ubicacion
                }
              }
            `
        }).then(res => {
            console.log(res.data.data);
        }).catch(err => {
            console.error(err);
        })

    }

    render() {
        return (
            <div>
                <ShowAndEditInfo
                    data={this.props.data}
                    id={this.props.id}
                    fields={this.props.fields}
                    readOnlyFields={this.props.readOnlyFields}
                    onDelete={this.deleteAllie}
                    requiredFields={this.props.requiredFields}
                    onSave={this.onSave}
                >
                    {
                        this.state.accountField
                    }

                    {(!this.state.accountField) && (<GridContainer>
                        <GridItem xs={12} sm={12} md={12} >
                            <Button round onClick={this.addDebtClick} color="primary">
                                <AddIcon />
                                Debt
                </Button>
                        </GridItem>
                    </GridContainer>)}
                    <SaveButton onSave={this.onSave} />
                </ShowAndEditInfo>

            </div>
        );
    }
}

export default AlliesPresentation;