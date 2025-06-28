import React from "react";
import { Box, Text, Image, VStack } from "@chakra-ui/react";

export interface IconTextSectionProps {
  icon: string;
  title: string;
  phoneText: string;
  alt?: string;
  onPhoneClick?: () => void;
}

export const IconTextSection = ({
  icon,
  title,
  phoneText,
  alt,
  onPhoneClick,
}: IconTextSectionProps) => (
  <VStack spacing={5} align="center" w={{ base: "100%", md: "380px" }}>
    <Box position="relative">
      <Image
        src={icon}
        alt={alt || title}
        w="192px"
        h="192px"
        objectFit="contain"
      />
    </Box>
    <VStack spacing={8} align="center">
      <Text
        color="#011E45"
        fontSize="24px"
        fontWeight="800"
        fontFamily="'Proxima Nova', -apple-system, Roboto, Helvetica, sans-serif"
        textAlign="center"
        textTransform="uppercase"
      >
        {title}
      </Text>
      <Text
        color="#F26531"
        fontSize="24px"
        fontWeight="800"
        fontFamily="'Proxima Nova', -apple-system, Roboto, Helvetica, sans-serif"
        textAlign="center"
        cursor={onPhoneClick ? "pointer" : "default"}
        _hover={onPhoneClick ? { textDecoration: "underline" } : {}}
        onClick={onPhoneClick}
      >
        {phoneText}
      </Text>
    </VStack>
  </VStack>
);

export default IconTextSection;
