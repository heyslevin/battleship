import { Center, WrapItem } from "@chakra-ui/react";
import React from "react";

const Unit = ({ hasShip, ai, handleUnitClick, index, isHit, disabled }) => {
  let shipColor = ai ? "white" : "blue";
  let bgColor = hasShip ? shipColor : "white";

  //When hit
  if (hasShip && isHit) {
    bgColor = "red";
  } else if (!hasShip && isHit) {
    bgColor = "teal.100";
    disabled = true;
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
