import { Center, WrapItem } from "@chakra-ui/react";
import React from "react";

const Unit = (props) => {
  let bgColor = props.hasShip ? "blue" : "white";

  return (
    <WrapItem>
      <Center
        w="50px"
        h="50px"
        bg={bgColor}
        _hover={{ background: "gray.300" }}
        border="1px"
        borderColor="gray.500"
        borderRadius="5px"
      >
        {props.index}
      </Center>
    </WrapItem>
  );
};

export default Unit;
