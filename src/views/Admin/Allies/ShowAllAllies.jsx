import React from "react";

import AlliesPresentation from "./AlliesPresentation";

import HTTP from "../../../services/RestService";

import { AlliesFields, DebtsFields } from './AlliesFields';

export default class ShowAllAllies extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                "name": "Business Name",
                "phone": 1234567,
                "email": "example@example.com",
                "location": "Colombia"
            }]
        }
    }

    componentDidMount() {
        this.getAllies();
    }

    getAllies = () => {
        HTTP.post("", {
            query: `
            query{
                allSuppliers{
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
            const { data } = this.state;
            const { allSuppliers } = res.data.data;
            let keys = [];
            allSuppliers.map((supplier => {
                keys = Object.keys(supplier);
                const supplierAux = {};
                keys.forEach(key => {
                    supplierAux[AlliesFields.parseToView[key]] = supplier[key];
                });
                data.push(supplierAux);
            }))
            this.setState({
                data: data
            })

            // Parse the fields

        }).catch(err => {
            console.error(err);

        })
    }

    deleteAllie = (id) => {
        //DELETE request 
    }

    render() {
        return (
            <div>
                {
                    this.state.data.map((data, index) => (
                        < AlliesPresentation
                            key={index}
                            data={data}
                            fields={AlliesFields.fields}
                            debtFields={DebtsFields.debtFields}
                            onDelete={this.deleteAllie}
                            readOnlyFields={AlliesFields.readOnlyFields}
                            id={index}
                        />
                    ))
                }
            </div>
        )
    }

}