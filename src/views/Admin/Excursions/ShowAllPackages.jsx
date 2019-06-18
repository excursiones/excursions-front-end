import React from "react";

import PackageDetails from "./PackagesDetails";

import HTTP from "../../../services/RestService";
import { PackageFields } from "./ExcursionsPackagesFields";


export default class ShowAllPackages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getAllies();
    }

    getAllies = () => {
        HTTP.post("", {
            query: `
                query {
                    allPackages {
                        id_packages
                        name
                        price
                        id_excursions
                        state
                    }
                }
            `
        }).then(res => {
            const { allPackages } = res.data.data;
            let data = {}, data_aux = [];

            allPackages.forEach(_package =>
                !data[_package.id_packages] ? (
                    data[_package.id_packages] = _package,
                    data[_package.id_packages].id_excursions = [data[_package.id_packages].id_excursions]
                ) : (
                        data[_package.id_packages].id_excursions.push(_package.id_excursions)
                    )

            );
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const _package = data[key];
                    data_aux.push(_package);
                }
            }

            this.setState({
                data: data_aux
            })
            console.log(res, allPackages);

        }).catch(err => {
            console.error(err);

        });
    }

    deletePackage = (index) => {
        // HTTP.post("", {
        //     query: `

        //     `
        // })

    }

    onSave = (index, data) => {
        console.log(index, data);

    }

    render() {
        return (
            <div>
                {
                    this.state.data.map((data, index) => (
                        < PackageDetails
                            key={index}
                            data={data}
                            fields={PackageFields.fields}
                            id={index}
                            readOnlyFields={PackageFields.readOnlyFields}
                            onDelete={this.deletePackage}
                            onSave={this.onSave}
                            requiredFields={PackageFields.fields}
                            excursionFields={PackageFields.excursionFields} />
                    ))
                }
            </div>
        )
    }

}