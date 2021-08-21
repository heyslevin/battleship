import { Center, WrapItem } from "@chakra-ui/react";
import React from "react";

const Unit = ({ hasShip, ai, handleUnitClick, index, isHit, disabled }) => {
  let shipColor = ai ? "red" : "blue";
  let bgColor = hasShip ? shipColor : "white";

  //When hit
  if (hasShip && isHit) {
    bgColor = "blue.500";
  } else if (!hasShip && isHit) {
    bgColor = "teal.100";
  }

  let handleClick = () => {
    handleUnitClick(index);
  };

  return (
    <WrapItem>
      <Center
        w="50px"
        h="50px"
        bg={bgColor}
        border="1px"
        borderColor="gray.500"
        borderRadius="5px"
        _hover={disabled ? null : { background: "gray.300" }}
        onClick={disabled ? null : handleClick}
      >
        {index}
      </Center>
    </WrapItem>
  );
};

export default Unit;
