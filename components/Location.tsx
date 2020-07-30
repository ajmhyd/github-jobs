import {
  Box,
  Checkbox,
  CheckboxGroup,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from '@chakra-ui/core';

import { Compass as CompassIcon } from 'react-feather';

const Location = () => {
  return (
    <Box maxW="xs" w="50%" py="4">
      <Checkbox>Full Time</Checkbox>
      <Text
        fontSize="sm"
        textTransform="uppercase"
        fontWeight="bold"
        color="gray"
        py="4"
      >
        Location
      </Text>
      <InputGroup variant="filled" size="md">
        <InputLeftElement
          width="3rem"
          children={<CompassIcon color="gray" />}
        />
        <Input
          placeholder="City, state, zip or country"
          focusBorderColor="blue.200"
          borderRadius="md"
          aria-label="Search by location"
          size="lg"
        />
      </InputGroup>
      <CheckboxGroup>
        <VStack align="flex-start" py="4">
          <Checkbox value="chicago">Chicago</Checkbox>
          <Checkbox value="newyork">New York</Checkbox>
          <Checkbox value="losangeles">Los Angeles</Checkbox>
          <Checkbox value="austin">Austin</Checkbox>
          <Checkbox value="miami">Miami</Checkbox>
        </VStack>
      </CheckboxGroup>
    </Box>
  );
};

export default Location;
