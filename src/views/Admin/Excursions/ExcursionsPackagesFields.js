export const ExcursionFields = {
    fields: [
        {
            labelText: "Id",
            id: "id"
        },
        {
            labelText: "Name",
            id: "name",
        },
        {
            labelText: "Price",
            id: "price",
            type: "number"
        },
        {
            labelText: "Location",
            id: "location"
        },
        {
            labelText: "Description",
            id: "description"
        },
        {
            labelText: "Duration (horas)",
            id: "duration",
            type: "number"
        },
        {
            labelText: "Satate",
            id: "state",
            type: "number"
        }
    ],
    readOnlyFields: {
        id: "id"
    }

}

export const PackageFields = {
    fields: [
        {
            labelText: "Id",
            id: "id_packages"
        },
        {
            labelText: "Name",
            id: "name"
        },
        {
            labelText: "Price",
            id: "price",
            type: "number"
        },
        {
            labelText: "State",
            id: "state"
        }
    ],
    excursionFields: [
        {
            labelText: "Excursion Id",
            id: "id_excursions",
            type: "number"
        }
    ],
    readOnlyFields: {
        id_packages: "id_packages"
    }
}
