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

type Props = {
  fullTime: boolean;
  locations: string[];
  setFullTime: (fullTime: boolean) => void;
  setLocations: (locations: string[]) => void;
}

const Location = ({ fullTime, setFullTime, locations, setLocations }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

  };
  console.log(locations);
  return (
    <Box maxW="xs" w="100%" py="4">
      {/* update to switch */}
      <Checkbox isChecked={fullTime} onChange={() => setFullTime(!fullTime)}>Full Time</Checkbox>
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
      {/* Update to SELECT */}
      {/* <CheckboxGroup onChange={handleChange} value={locations}>
        <VStack align="flex-start" py="4">
          <Checkbox value="chicago">Chicago</Checkbox>
          <Checkbox value="newyork">New York</Checkbox>
          <Checkbox value="losangeles">Los Angeles</Checkbox>
          <Checkbox value="austin">Austin</Checkbox>
        </VStack>
      </CheckboxGroup> */}
    </Box>
  );
};

export default Location;
