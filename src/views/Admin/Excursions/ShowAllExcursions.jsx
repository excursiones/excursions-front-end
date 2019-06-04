import React from "react";

import ExcursionDetails from "./ExcursionDetails";

import Http from "../../../services/RestService.jsx";

const fields = [
  {
    labelText: "Id",
    id: "id"
  },
  {
    labelText: "Name",
    id: "name"
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
];

export default class ShowAllExcursions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Datos de Prueba

      data: [
        {
          id: 1,
          name: "Excursion Name 1",
          price: "$ 1000",
          country: "Colombia",
          city: "Cartagena",
          description: "A description",
          duration: "1 h",
          capacity: "50 people",
          "allie-id": 123456789
        }
      ]
    };

    Http.post(
      "",
      {
        query:
          "query { allExcursions { id title:name price coordinates:location description } }"
      },
      false,
      true
    ).then(res => {
      this.setState({ data: res["data"]["data"]["allExcursions"] || [] });
      console.log(res);
    });
  }

  getAllies = () => {
    // GET request para obtener todos las Empresas
  };

  render() {
    return (
      <div>
        {this.state.data.map(data => (
          <ExcursionDetails data={data} fields={fields} key={data['id']} />
        ))}
      </div>
    );
  }
}
