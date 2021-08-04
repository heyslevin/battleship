import { Center, WrapItem } from "@chakra-ui/react";
import React from "react";

const Unit = () => {
  return (
    <WrapItem>
      <Center
        w="50px"
        h="50px"
        bg="white"
        _hover={{ background: "gray.300" }}
        border="1px"
        borderColor="gray.500"
        borderRadius="5px"
      ></Center>
    </WrapItem>
  );
};

export default Unit;
