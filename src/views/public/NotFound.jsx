import React from "react";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";

class NotFound extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>Página no encontrada</CardHeader>
      </Card>
    );
  }
}

export default NotFound;
