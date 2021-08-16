import { Center, WrapItem } from "@chakra-ui/react";
import React from "react";

const Unit = ({ hasShip, ai, handleUnitClick, index }) => {
  let shipColor = ai ? "red" : "blue";
  let bgColor = hasShip ? shipColor : "white";

  let handleClick = () => {
    handleUnitClick(index);
  };

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
        onClick={handleClick}
      >
        {index}
      </Center>
    </WrapItem>
  );
};

export default Unit;
