import React from "react";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";

class Forbidden extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>Página no permitida</CardHeader>
      </Card>
    );
  }
}

export default Forbidden;
