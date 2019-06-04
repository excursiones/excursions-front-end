import React from "react";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import CustomInput from "../../../components/CustomInput/CustomInput";

const DeleteExcursion = ({ ...props }) => {
  const onClick = () => {
    props.onClick(props.id);
  };
  return (
    <IconButton onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  );
};

export default class ExcursionDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      name: ""
    };
  }

  componentDidMount() {
    this.setState((state, props) => ({
      name: props.data["name"]
    }));
  }

  deleteExcursion = id => {};

  editSwitch = () => {
    this.setState(state => ({
      edit: !state.edit
    }));
  };

  render() {
    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{this.state.name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <GridContainer>
                <GridItem xs={6} sm={6} md={2}>
                  Edit <Switch onChange={this.editSwitch} />
                </GridItem>
                <GridItem xs={false} sm={false} md={8} />
                <GridItem xs={6} sm={6} md={2}>
                  {this.state.edit ? (
                    <DeleteExcursion onClick={this.deleteExcursion} id={123} />
                  ) : null}
                </GridItem>
              </GridContainer>
              <GridContainer>
                {this.props.fields.map((field, index) => (
                  <GridItem xs={12} sm={12} md={4} key={index}>
                    <CustomInput
                      labelText={field.labelText}
                      id={field.id}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        readOnly: field.id === "id" ? true : !this.state.edit,
                        defaultValue: this.props.data[field.id]
                      }}
                    />
                  </GridItem>
                ))}
              </GridContainer>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}
