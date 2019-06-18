import React from "react";

import ExcursionDetails from "./ExcursionDetails";

import HTTP from "../../../services/RestService";
import { ExcursionFields } from "./ExcursionsPackagesFields";

const readOnlyFields = {
  id: "id"
};

const requiredFields = {};

export default class ShowAllExcursions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Datos de Prueba
      excursions: []
    };
  }

  componentDidMount() {
    this.getAllies();
  }

  getAllies = () => {
    // GET request para obtener todos las Empresas
    HTTP.post("", {
      query: `
              query {
                allExcursions {
                    id
                    name
                    price
                    location
                    description
                    photo_path
                    duration
                    state
                }
              }
            `
    })
      .then(res => {
        const { allExcursions } = res.data.data;
        const excursions = this.state.excursions;
        allExcursions.map(excursion => excursions.push(excursion));
        this.setState({
          excursions: excursions
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  deleteExcursion = index => {
    let excursion = this.state.excursions[index];
    HTTP.post("", {
      query: `
                mutation {
                    deleteExcursion(id: ${excursion.id})
                }
            `
    }).then(res => {
      res && alert("Excursion has been deleted successfully!");
    });
    excursion = this.state.excursions;
    delete excursion[index];
    this.setState({ excursions: excursion });
  };

  updateExcursion = (index, data) => {
    const excursion = data;
    excursion.photo_path = "";
    HTTP.post("", {
      query: `
                mutation {
                    updateExcursion (id: ${excursion.id}, excursion: {
                        name: "${excursion["name"]}",
                        price: ${excursion["price"]},
                        location: "${excursion["location"]}",
                        description: "${excursion["description"]}",
                        photo_path: "",
                        duration: ${excursion["duration"]},
                        state: ${excursion["state"]}
                    }){
                        id
                    }
                }
            `
    })
      .then(res => {
        res &&
          res.data.data.updateExcursion.id &&
          alert("Excursion has been updated succesfully!");
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <div>
        {this.state.excursions &&
          this.state.excursions.map((data, index) => (
            <ExcursionDetails
              data={data}
              onDelete={this.deleteExcursion}
              onSave={this.updateExcursion}
              requiredFields={requiredFields}
              readOnlyFields={readOnlyFields}
              key={"excursion" + index}
              index={index}
              fields={ExcursionFields.fields}
            />
          ))}
      </div>
    )
  }

}
