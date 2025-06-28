import React from "react";
import { Box, Button, Text, VStack } from "@chakra-ui/react";

export interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const ServiceCard = ({
  title,
  description,
  buttonText,
  onButtonClick,
}: ServiceCardProps) => (
  <Box
    bg="#EAF7FA"
    border="5px solid #A2DCED"
    borderRadius="20px"
    p={6}
    boxShadow="0px 24px 38px 0px rgba(0, 0, 0, 0.14), 0px 9px 46px 0px rgba(0, 0, 0, 0.12), 0px 11px 15px 0px rgba(0, 0, 0, 0.20)"
    flex="1"
    minW={{ base: "100%", md: "400px" }}
    maxW="580px"
  >
    <VStack align="stretch" spacing={6}>
      <VStack align="stretch" spacing={6}>
        <Text
          color="#011E45"
          fontSize="24px"
          fontWeight="800"
          fontFamily="'Proxima Nova', -apple-system, Roboto, Helvetica, sans-serif"
          textTransform="uppercase"
        >
          {title}
        </Text>
        <Text
          color="#011E45"
          fontSize="24px"
          fontWeight="400"
          fontFamily="'Proxima Nova', -apple-system, Roboto, Helvetica, sans-serif"
          lineHeight="normal"
        >
          {description}
        </Text>
      </VStack>
      <Button
        bg="#011E45"
        color="white"
        borderRadius="20px"
        h="64px"
        fontSize="24px"
        fontWeight="700"
        fontFamily="'Proxima Nova', -apple-system, Roboto, Helvetica, sans-serif"
        _hover={{ bg: "#002A5C" }}
        w="100%"
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </VStack>
  </Box>
);

export default ServiceCard;
