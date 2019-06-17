
export const AlliesFields = {
    fields: [
        {
            labelText: "Id",
            id: "id",
        },
        {
            labelText: "Code",
            id: "code",
            type: "number"
        },
        {
            labelText: "NIT",
            id: "nit",
            type: "number"
        },
        {
            labelText: "Business Name",
            id: "name",
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
    ],
    parseToView: {
        id: "id",
        Codigo: "code",
        Nit: "nit",
        Razon: "name",
        Telefono: "phone",
        Correo: "email",
        Ubicacion: "location"
    },
    parseToServer: {
        id: "id",
        code: "Codigo",
        nit: "Nit",
        name: "Razon",
        phone: "Telefono",
        email: "Correo",
        location: "Ubicacion"
    },
    readOnlyFields: {
        id: "id"
    }
};

export const DebtsFields = {
    debtFields: [
        {
            labelText: "Bill to Pay",
            id: "bill-to-pay",
            type: "number"
        },
        {
            labelText: "Payment Value",
            id: "payment-value",
            type: "number"
        },
        {
            labelText: "Interests",
            id: "interests",
            type: "number"
        }
    ],
    parseToView: {
        Cuentas_por_pagar: "bill-to-pay",
        Cuentas_pagadas: "payment-value",
        Intereses_por_pagar: "interests"
    },
    parseToServer: {
        "bill-to-pay": "Cuentas_por_pagar",
        "payment-value": "Cuentas_pagadas",
        interests: "Intereses_por_pagar"
    }

};