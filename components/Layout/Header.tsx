import {
  Container,
  Flex,
  IconButton,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/core';

import {
  Sun as SunIcon,
  Moon as MoonIcon
} from 'react-feather';

const Header = () => {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <Container maxW="lg" py="4">
      <Flex>
        <Text>Github Job</Text>
        <Spacer />
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${text} mode`}
          variant="ghost"
          color="current"
          marginLeft="2"
          onClick={toggleMode}
          icon={<SwitchIcon />}
        />
      </Flex>
    </Container>
  )
};

export default Header;
