import React from "react";

import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/CustomButtons/Button";
import AddIcon from "@material-ui/icons/Add";
import AddDebt from "./AddDebt";
import Field from "../ShowInfo/Field";
import SaveButton from "../ShowInfo/SaveButton";
import HTTP from "../../../services/RestService"
import { AlliesFields, DebtsFields } from "./AlliesFields"

class AddAllie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            accountField: null,
            emptyField: true
        }
        this.account = {};
        this.data = {};
    }

    deleteDebtField = (index) => {
        (this.account.id) && (
            HTTP.post("", {
                query: `
                    mutation {
                        deleteAccount(id: ${this.account.id})
                    }
                `
            }).then(_ => {
                alert("Account Deleted");
            }).catch(err => {
                console.error(err);

            })
        )
        this.account = {};
        this.setState({
            accountField: null
        })
    }

    onDebtFieldChange = (id, event) => {
        const { name, value } = event.target;
        (value.trim() != "") && (this.account[name] = value);
    }

    addDebtClick = () => {
        let debtsFields = null;
        (!this.state.accountField) && (debtsFields =
            <AddDebt
                key={"account_field"}
                fields={DebtsFields.debtFields}
                onDelete={this.deleteDebtField}
                onChange={this.onDebtFieldChange}
            />
        );
        this.setState({
            accountField: debtsFields
        });
    }

    onChange = (event) => {
        const { name, value } = event.target;
        console.log(typeof value);

        ((typeof this.data[name] === "string") ? (value.trim() != this.data[name].trim()) : true) && (this.data[name] = value);
    }

    onSave = () => {
        let empty = false; // Flag que indica si hay compos vacios

        // Verifica si hay algún campo vacio en Crear un 'Allie'.
        AlliesFields.fields.forEach(field => {
            (!empty) && (field.id != "id") && (empty = !this.data[field.id]) && (this.setState({ emptyField: empty }));
        });

        console.log(this.data, this.account);
        if (empty) return; // TODO: Lanzar un dialogo diciendo que no puede estar vacio 

        // Hace la traducción de los id de cada campo.
        const keys = Object.keys(AlliesFields.parseToView), data = {};
        console.log(keys);

        keys.forEach(key => {
            data[key] = this.data[AlliesFields.parseToView[key]];
        });

        console.log(data);


        // Petición para Actualizar.
        HTTP.post("", {
            query: `
            mutation {
                createSupplier (supplier:{
                    Codigo: ${data["Codigo"]},
                    Nit: ${data["Nit"]},
                    Razon: "${data["Razon"]}",
                    Telefono:"${data["Telefono"]}",
                    Correo: "${data["Correo"]}",
                    Ubicacion: "${data["Ubicacion"]}"
                  }) {
                  id
                }
            }
            `
        }).then(res => {
            const id_supplier = res.data.data.createSupplier.id;
            (this.state.accountField) && (
                HTTP.post("", {
                    query: `
                    mutation {
                        createAccount(account: {
                            Cuentas_por_pagar: ${this.account[DebtsFields.parseToView["Cuentas_por_pagar"]]},
                            Cuentas_pagadas: ${this.account[DebtsFields.parseToView["Cuentas_pagadas"]]},
                            Intereses_por_pagar: ${this.account[DebtsFields.parseToView["Intereses_por_pagar"]]},
                            supplier_id: ${id_supplier}
                        }) {
                            id
                        }
                    }
                `
                }).then(response => {
                    console.log(response);

                }).catch(error => {
                    console.error(error);
                })
            );
        }).catch(err => {
            console.error(err);
        })


    }

    render() {
        return (
            <div>
                <GridContainer>
                    {
                        AlliesFields.fields.map((field, index) =>
                            (field.id !== "id") && <Field key={index}
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
                                    type: field.type
                                }}
                            />
                        )
                    }
                </GridContainer>
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
                <SaveButton onSave={this.onSave} label="Create" />

            </div>
        );
    }
}

export default AddAllie;