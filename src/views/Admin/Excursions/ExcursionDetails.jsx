import React from "react";
import ShowAndEditInfo from "../ShowInfo/ShowAndEditInfo";

export default class ExcursionDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      name: ""
    };
  }

  render() {
    return (
      <div>
        <ShowAndEditInfo
          data={this.props.data}
          id={this.props.index}
          fields={this.props.fields}
          onDelete={this.props.onDelete}
          requiredFields={this.props.requiredFields}
          onSave={this.props.onSave}
          readOnlyFields={this.props.readOnlyFields}
        />
      </div>
    );
  }
}
