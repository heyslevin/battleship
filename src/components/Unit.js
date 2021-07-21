import { Center, WrapItem } from "@chakra-ui/react";
import React from "react";

const Unit = ({ index }) => {
  return (
    <WrapItem key={index}>
      <Center w="30px" h="30px" bg="red.100">
        1
      </Center>
    </WrapItem>
  );
};

export default Unit;
