import React from "react";
import GridContainer from "../../../components/Grid/GridContainer";
import AddIcon from "@material-ui/icons/Add";
import Button from "../../../components/CustomButtons/Button";
import ShowAndEditInfo from "../ShowInfo/ShowAndEditInfo";
import ExcursionField from "./ExcursionField";



export default class PackageDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            excursionFields: {},
            name: ""
        }
        this.excursionsId = {}
        this.data = {

        }

    }

    componentDidMount() {
        this.setState((state, props) => ({
            name: props.data["name"]
        }))
    }

    editSwitch = () => {
        this.setState((state) => ({
            edit: !state.edit
        }))
    }

    deleteExcursionField = (index) => {
        const excursions_aux = this.state.excursionFields;
        delete excursions_aux[index];
        delete this.excursionsId[index];
        console.log("deleted " + index);

        this.setState({
            excursions: excursions_aux
        })
    }

    onExcursionFieldChange = (event, index) => {
        const { value } = event.target;
        (value !== this.excursionsId[index]) && (this.excursionsId[index] = value)
    }

    onSave = () => {
        const data = {};
        this.props.onSave(this.props.id, Object.assign(data, this.excursionsId, this.data))
    }

    addExcursionHandler = () => {
        const excursions_aux = this.state.excursionFields;
        const keys = Object.keys(this.state.excursionFields);
        const index = keys.length === 0 ? 0 : keys[keys.length - 1] + 1;
        this.excursionsId[index] = "";
        excursions_aux[index] = <ExcursionField
            key={index}
            fields={this.props.excursionFields}
            onDelete={this.deleteExcursionField}
            onChange={this.onExcursionFieldChange}
            requiredFields={this.props.excursionFields}
            index={index} />;
        console.log("added " + index);

        this.setState({
            excursionFields: excursions_aux,
        })
    }


    render() {
        return (
            <div>
                <ShowAndEditInfo
                    data={this.props.data}
                    id={this.props.id}
                    fields={this.props.fields}
                    readOnlyFields={this.props.readOnlyFields}
                    onDelete={this.props.onDelete}
                    requiredFields={this.props.requiredFields}
                    onSave={this.onSave}
                >
                    {
                        Object.values(this.state.excursionFields).map((excursionField) =>

                            excursionField
                        )
                    }
                    <GridContainer>
                        <Button round onClick={this.addExcursionHandler} color="primary">
                            <AddIcon />
                            Excusrsion
                    </Button>
                    </GridContainer>
                </ShowAndEditInfo>
            </div>
        )
    }
}