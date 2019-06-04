import React from "react";

import AlliesPresentation from "./AlliesPresentation";

import HTTP from "../../../services/RestService";

const fields = [
    {
        labelText: "Id",
        id: "id",

    },
    {
        labelText: "Business Name",
        id: "name"
    },
    {
        labelText: "Phone",
        id: "phone"
    },
    {
        labelText: "Email",
        id: "email"
    },
    {
        labelText: "Location",
        id: "location"
    }
]

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

    getAllies = () => {
        // GET request para obtener todos las Empresas
    }

    render() {
        return (
            <div>
                {
                    this.state.data.map((data) => (
                        < AlliesPresentation data={data} fields={fields} />
                    ))
                }
            </div>
        )
    }

}