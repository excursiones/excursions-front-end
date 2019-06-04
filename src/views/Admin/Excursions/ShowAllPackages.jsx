import React from "react";

import PackageDetails from "./PackagesDetails";

import HTTP from "../../../services/RestService";

const fields = [
    {
        labelText: "Id",
        id: "id",

    },
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

export default class ShowAllPackages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                "name": "Package Name 1",
                "price": "$ 1000",
                "state": "A State"
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
                        < PackageDetails data={data} fields={fields} />
                    ))
                }
            </div>
        )
    }

}