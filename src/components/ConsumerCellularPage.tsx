import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  Image,
  VStack,
  HStack,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";

// Navigation Bar Component
const NavigationBar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box bg="#F26531" boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)" w="100%">
      <Container maxW="1180px" py={2.5} px={0}>
        <Flex
          justify="space-between"
          align="center"
          direction={{ base: "column", lg: "row" }}
          gap={4}
        >
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7017b2d5d99ac8d2ded4acdfcc5f63bc17e69b23?placeholderIfAbsent=true&apiKey=35c7d8a4b3104924846723b8dc35bbc5"
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
              (888) 888-8888
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

// Service Card Component
interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
}

const ServiceCard = ({ title, description, buttonText }: ServiceCardProps) => (
  <Box
    bg="#EAF7FA"
    border="5px solid #A2DCED"
    borderRadius="20px"
    p={6}
    boxShadow="0px 24px 38px 0px rgba(0, 0, 0, 0.14), 0px 9px 46px 0px rgba(0, 0, 0, 0.12), 0px 11px 15px 0px rgba(0, 0, 0, 0.20)"
    flex="1"
    minW={{ base: "100%", md: "400px" }}
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
      >
        {buttonText}
      </Button>
    </VStack>
  </Box>
);

// Icon Text Section Component
interface IconTextSectionProps {
  icon: string;
  title: string;
  phoneText: string;
}

const IconTextSection = ({ icon, title, phoneText }: IconTextSectionProps) => (
  <VStack spacing={5} align="center" w={{ base: "100%", md: "380px" }}>
    <Box position="relative">
      <Image src={icon} alt={title} w="192px" h="192px" objectFit="contain" />
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
      >
        {phoneText}
      </Text>
    </VStack>
  </VStack>
);

// Footer Component
const Footer = () => (
  <Box bg="#011E45" w="100%">
    <Container maxW="1180px" py={10} px={0}>
      <VStack spacing={8} align="stretch">
        {/* Footer Links */}
        <VStack spacing={2} align="stretch">
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            gap={8}
            flexWrap="wrap"
          >
            <Text
              color="white"
              fontSize="24px"
              fontWeight="700"
              fontFamily="'Trade Gothic Next LT Pro', -apple-system, Roboto, Helvetica, sans-serif"
              letterSpacing="0.8px"
              textTransform="uppercase"
            >
              Privacy Policy
            </Text>
            <Box
              w="2px"
              h="18px"
              bg="white"
              display={{ base: "none", md: "block" }}
            />
            <Text
              color="white"
              fontSize="24px"
              fontWeight="700"
              fontFamily="'Trade Gothic Next LT Pro', -apple-system, Roboto, Helvetica, sans-serif"
              letterSpacing="0.8px"
              textTransform="uppercase"
            >
              Terms and Conditions
            </Text>
            <Box
              w="2px"
              h="18px"
              bg="white"
              display={{ base: "none", md: "block" }}
            />
            <Text
              color="white"
              fontSize="24px"
              fontWeight="700"
              fontFamily="'Trade Gothic Next LT Pro', -apple-system, Roboto, Helvetica, sans-serif"
              letterSpacing="0.8px"
              textTransform="uppercase"
            >
              Accessibility
            </Text>
          </Flex>
          <Text
            color="white"
            fontSize="24px"
            fontWeight="700"
            fontFamily="'Trade Gothic Next LT Pro', -apple-system, Roboto, Helvetica, sans-serif"
            letterSpacing="0.8px"
            textTransform="uppercase"
          >
            Do Not Sell or Share My Personal Information
          </Text>
        </VStack>

        {/* Disclaimers */}
        <Text
          color="white"
          fontSize="12px"
          fontWeight="400"
          fontFamily="'Proxima Nova', -apple-system, Roboto, Helvetica, sans-serif"
          lineHeight="normal"
        >
          The name{" "}
          <Text as="span" fontWeight="600">
            Consumer Cellular
          </Text>{" "}
          and the pathways logo are trademarks of{" "}
          <Text as="span" fontWeight="600">
            Consumer Cellular, Inc.
          </Text>{" "}
          All other trademarks are the property of their respective owners.{" "}
          <Text as="span" fontWeight="600">
            Home Service Pros
          </Text>{" "}
          is an authorized sales agent of{" "}
          <Text as="span" fontWeight="600">
            Consumer Cellular.
          </Text>{" "}
          ©{" "}
          <Text as="span" fontWeight="600">
            Home Service Pros
          </Text>{" "}
          2025. All Rights Reserved.
          <br />
          <br />© 2025 Consumer Cellular, Inc. Terms and Conditions subject to
          change. Taxes and fees apply. New service activation on approved
          credit. Cellular service is not available in all areas and is subject
          to system limitations. For unlimited data plans, access to high-speed
          data will be reduced after 50GB of combined use, and you will
          experience slower speeds for the remainder of your billing cycle.
          Unlimited data plans only for customers age 50+. Age validation
          required. Plans shown include $5 credit for AutoPay and E-billing. If
          you're not completely satisfied within 30 days (data use is limited to
          500MB) of activation of your service, cancel and pay nothing other
          than third party charges.
        </Text>
      </VStack>
    </Container>
  </Box>
);

// Main Consumer Cellular Page Component
export const ConsumerCellularPage = () => {
  return (
    <Box w="100%" bg="white" position="relative">
      {/* Navigation */}
      <NavigationBar />

      {/* New Customers Section */}
      <Container maxW="1180px" py={10} px={0}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={8}
          align="center"
          justify="space-between"
        >
          <VStack
            align="stretch"
            spacing={8}
            flex="1"
            maxW={{ base: "100%", lg: "701px" }}
          >
            <Text
              color="#011E45"
              fontSize={{ base: "40px", lg: "60px" }}
              fontWeight="600"
              fontFamily="'Proxima Nova', -apple-system, Roboto, Helvetica, sans-serif"
            >
              New Customers
            </Text>
            <Text
              color="#011E45"
              fontSize="24px"
              fontWeight="400"
              fontFamily="'Proxima Nova', -apple-system, Roboto, Helvetica, sans-serif"
            >
              Looking for help with your cellphone plan or looking to buy a new
              device? Give us a call to get fast, personalized assistance.
            </Text>
            <Text
              color="#F26531"
              fontSize="24px"
              fontWeight="800"
              fontFamily="'Proxima Nova', -apple-system, Roboto, Helvetica, sans-serif"
            >
              Contact Us at (888) 888-8888
            </Text>
          </VStack>

          <IconTextSection
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c117779632979ae7d51179eef575b71fb75cd59f?placeholderIfAbsent=true&apiKey=35c7d8a4b3104924846723b8dc35bbc5"
            title="START NEW SERVICE"
            phoneText="Call (888) 888-8888"
          />
        </Flex>
      </Container>

      {/* Upgrade/Move Section */}
      <Container maxW="1180px" py={10} px={0}>
        <Flex direction={{ base: "column", lg: "row" }} gap={5} align="stretch">
          <ServiceCard
            title="UPGRADE SERVICE"
            description="Ready to upgrade to a new device? Learn about your options."
            buttonText="Call to Upgrade (888) 888-8888"
          />
          <ServiceCard
            title="MOVE SERVICE"
            description="It's easy to transfer your Consumer Cellular service without missing a beat."
            buttonText="Call to Move (888) 888-8888"
          />
        </Flex>
      </Container>

      {/* Existing Customers Section */}
      <Container maxW="1180px" py={10} px={0}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={8}
          align="center"
          justify="space-between"
        >
          <VStack align="stretch" spacing={8} flex="1">
            <Text
              color="#011E45"
              fontSize={{ base: "40px", lg: "60px" }}
              fontWeight="600"
              fontFamily="'Proxima Nova', -apple-system, Roboto, Helvetica, sans-serif"
            >
              Existing
              <br />
              Customers
            </Text>
            <Text
              color="#011E45"
              fontSize="24px"
              fontWeight="400"
              fontFamily="'Proxima Nova', -apple-system, Roboto, Helvetica, sans-serif"
            >
              Already a Consumer Cellular customer? Choose one of the following
              options to get started with your account support.
            </Text>
            <Text
              color="#F26531"
              fontSize="24px"
              fontWeight="600"
              fontFamily="'Proxima Nova', -apple-system, Roboto, Helvetica, sans-serif"
            >
              Contact Us at (888) 888-8888
            </Text>
          </VStack>

          <Flex direction={{ base: "column", md: "row" }} gap={5}>
            <IconTextSection
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/44aa0a9b1a12f24dc93eb17f31d379740d166996?placeholderIfAbsent=true&apiKey=35c7d8a4b3104924846723b8dc35bbc5"
              title="BILLING SUPPORT"
              phoneText="Call (888) 888-8888"
            />
            <IconTextSection
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0f61ec0e33461a686d3ab20d112978cafddf4233?placeholderIfAbsent=true&apiKey=35c7d8a4b3104924846723b8dc35bbc5"
              title="CUSTOMER SUPPORT"
              phoneText="Call (888) 888-8888"
            />
          </Flex>
        </Flex>
      </Container>

      {/* Call to Action Section */}
      <Box bg="#F8F8F8" w="100%">
        <Container maxW="1180px" py={10} px={0}>
          <VStack spacing={8} align="center">
            <Text
              color="#F26531"
              fontSize={{ base: "40px", lg: "60px" }}
              fontWeight="700"
              fontFamily="'Trade Gothic Next LT Pro', -apple-system, Roboto, Helvetica, sans-serif"
              textAlign="center"
              textTransform="uppercase"
            >
              Make a Connection with Consumer Cellular today.
            </Text>
            <Text
              color="#011E45"
              fontSize="26px"
              fontWeight="400"
              fontFamily="'Proxima Nova', -apple-system, Roboto, Helvetica, sans-serif"
              textAlign="center"
            >
              We'd love to have you as part of our family!
            </Text>
            <Button
              bg="#011E45"
              color="white"
              borderRadius="20px"
              h="64px"
              px={16}
              fontSize="24px"
              fontWeight="700"
              fontFamily="'Proxima Nova', -apple-system, Roboto, Helvetica, sans-serif"
              _hover={{ bg: "#002A5C" }}
              maxW="580px"
              w="100%"
            >
              Call to Get Started{" "}
              <Text as="span" fontWeight="600">
                (888) 888-8888
              </Text>
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Accessibility Button */}
      <Box position="fixed" bottom={4} left={4} zIndex={1000}>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a93718dec72bf8b904041696bd7be54c6106e43?placeholderIfAbsent=true&apiKey=35c7d8a4b3104924846723b8dc35bbc5"
          alt="Accessibility Menu"
          w="40px"
          h="40px"
          cursor="pointer"
        />
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default ConsumerCellularPage;
