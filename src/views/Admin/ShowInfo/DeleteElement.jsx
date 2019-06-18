import React from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const DeleteElement = ({ ...props }) => {
  const onClick = () => {
    props.onClick(props.id);
  };
  return (
    <IconButton onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteElement;
