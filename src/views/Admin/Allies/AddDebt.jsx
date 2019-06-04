import React from "react";

import CustomInput from "../../../components/CustomInput/CustomInput";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

class AddDebt extends React.Component {

    render() {

        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                            labelText="Bill to pay"
                            id="bill-to-pay"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                required: true
                            }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                            labelText="Payment Value"
                            id="payment"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                required: true
                            }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                            labelText="Interests"
                            id="interests"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                required: true
                            }}
                        />
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default AddDebt;