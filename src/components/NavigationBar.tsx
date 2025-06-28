import React from "react";
import { Box, Container, Flex, Text, Image, VStack } from "@chakra-ui/react";

export interface NavigationBarProps {
  logoSrc?: string;
  phoneNumber?: string;
}

export const NavigationBar = ({
  logoSrc = "https://cdn.builder.io/api/v1/image/assets/TEMP/7017b2d5d99ac8d2ded4acdfcc5f63bc17e69b23?placeholderIfAbsent=true&apiKey=35c7d8a4b3104924846723b8dc35bbc5",
  phoneNumber = "(888) 888-8888",
}: NavigationBarProps) => {
  return (
    <Box bg="#F26531" boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)" w="100%">
      <Container maxW="1180px" py={2.5} px={{ base: 4, lg: 0 }}>
        <Flex
          justify="space-between"
          align="center"
          direction={{ base: "column", lg: "row" }}
          gap={4}
        >
          <Image
            src={logoSrc}
            alt="Consumer Cellular Logo"
            h="31px"
            w="220px"
            objectFit="contain"
          />
          <VStack
            bg="white"
            borderRadius="20px"
            px={10}
            py={2}
            spacing={1}
            minW={{ base: "240px", lg: "280px" }}
          >
            <Text
              color="#001E45"
              fontSize="16px"
              fontWeight="600"
              fontFamily="'Proxima Nova', -apple-system, Roboto, Helvetica, sans-serif"
              textAlign="center"
            >
              Call to Get Started
            </Text>
            <Text
              color="#001E45"
              fontSize="27px"
              fontWeight="800"
              fontFamily="'Proxima Nova', -apple-system, Roboto, Helvetica, sans-serif"
              textAlign="center"
            >
              {phoneNumber}
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavigationBar;
