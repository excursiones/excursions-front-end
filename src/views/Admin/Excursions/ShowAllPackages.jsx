import React from "react";

import PackageDetails from "./PackagesDetails";
import HTTP from "../../../services/RestService";

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
    labelText: "State",
    id: "state"
  }
];

const excursionFields = [
  {
    labelText: "Excursion Id",
    id: "excursion-id"
  }
];

const readOnlyFields = {
  id: "id"
};

export default class ShowAllPackages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Package Name 1",
          price: "$ 1000",
          state: "A State"
        }
      ]
    };
  }

  getAllies = () => {
    // GET request para obtener todos las Empresas
  };

  deletePackage = index => {
    // console.log(index);
  };

  onSave = (index, data) => {
    // console.log(index, data);
  };

  render() {
    return (
      <div>
        {this.state.data.map((data, index) => (
          <PackageDetails
            key={index}
            data={data}
            fields={fields}
            id={index}
            readOnlyFields={readOnlyFields}
            onDelete={this.deletePackage}
            onSave={this.onSave}
            requiredFields={fields}
            excursionFields={excursionFields}
          />
        ))}
      </div>
    );
  }
}
