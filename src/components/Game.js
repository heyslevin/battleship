import { Heading } from "@chakra-ui/react";
import React from "react";

const Board = (props) => {
  return (
    <React.Fragment>
      <Heading align="center">Welcome to Battleship</Heading>
      {props.children}
      {console.log(props.children)}
    </React.Fragment>
  );
};

export default Board;
