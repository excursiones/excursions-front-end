import React from "react";

import ExcursionDetails from "./ExcursionDetails";

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
        labelText: "Country",
        id: "country"
    },
    {
        labelText: "City",
        id: "city"
    },
    {
        labelText: "Description",
        id: "description"
    },
    {
        labelText: "Duration",
        id: "duration"
    },
    {
        labelText: "Capacity",
        id: "capacity"
    },
    {
        labelText: "Allie Id",
        id: "allie-id"
    }
]

const readOnlyFields = {
    id: "id"
}

const requiredFields = {

}

export default class ShowAllExcursions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // Datos de Prueba
            excursions: [{
                id: 1,
                "name": "Excursion Name 1",
                "price": "$ 1000",
                "country": "Colombia",
                "city": "Cartagena",
                description: "A description",
                duration: "1 h",
                capacity: "50 people",
                "allie-id": 123456789
            }]
        }

    }

    componentDidMount() {
        this.getAllies();
    }

    getAllies = () => {
        // GET request para obtener todos las Empresas
        HTTP.post("", {
            query: `
              query {
                allSupliers {
                  name
                }
              }
            `
        }).then(res=>{
            console.log(res);
        }).catch(err=> {
            console.error(err);
        })
    }

    deleteExcursion = (index) => {
        console.log(index);

    }

    updateExcursion = (index, data) => {
        const { excursions } = this.state;
        excursions[index] = data;
        this.setState({
            excursions: excursions
        })
        console.log(this.state.excursions[index]);

    }

    render() {
        return (
            <div>
                {
                    this.state.excursions && this.state.excursions.map((data, index) => (
                        < ExcursionDetails
                            data={data}
                            onDelete={this.deleteExcursion}
                            onSave={this.updateExcursion}
                            requiredFields={requiredFields}
                            readOnlyFields={readOnlyFields}
                            key={"excursion" + index}
                            index={index}
                            fields={fields} />
                    ))
                }
            </div>
        )
    }

}