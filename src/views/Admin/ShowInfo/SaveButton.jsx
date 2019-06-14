import React from 'react';

import SaveIcon from '@material-ui/icons/Save';
import Button from "../../../components/CustomButtons/Button";
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';

const SaveButton = ({ ...props }) => {

    return (
        <div>
            <GridContainer>
                <GridItem md={10} />
                <GridItem sm={12} xs={12} md={2}>
                    <Button color="primary" size="sm" round onClick={props.onSave} >
                        <SaveIcon /> {props.label || "Save"}
                    </Button>
                </GridItem>
            </GridContainer>
        </div>
    )

}

export default SaveButton;