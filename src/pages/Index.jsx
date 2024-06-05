import { Box, Container, Flex, Text, VStack, useBreakpointValue } from "@chakra-ui/react";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={4}>
      <Flex
        as="nav"
        bg="blue.500"
        color="white"
        p={4}
        justifyContent="space-between"
        alignItems="center"
        borderRadius="md"
      >
        <Text fontSize="xl" fontWeight="bold">
          MyApp
        </Text>
        <Box>
          <Text as="a" href="#" mx={2}>
            Home
          </Text>
          <Text as="a" href="#" mx={2}>
            About
          </Text>
          <Text as="a" href="#" mx={2}>
            Contact
          </Text>
        </Box>
      </Flex>
      <VStack
        spacing={4}
        mt={8}
        alignItems="center"
        justifyContent="center"
        height={isMobile ? "auto" : "70vh"}
      >
        <Text fontSize="2xl">Welcome to MyApp</Text>
        <Text>This is a basic structure of a React app with Chakra UI.</Text>
      </VStack>
    </Container>
  );
};

export default Index;