import {
  Badge,
  Box,
  Flex,
  Image,
  ListItem,
  Stack,
  Text,
  Wrap,
  useColorModeValue,
} from '@chakra-ui/core';
import moment from 'moment';
import { Job } from '../interfaces';
import { Clock as ClockIcon, Compass as CompassIcon } from 'react-feather';
type Props = {
  data: Job;
};

const ListJobItem = ({ data }: Props) => {
  const fallbackImage = useColorModeValue("/img/GitHub-Mark-120px-plus.png", "/img/GitHub-Mark-Light-120px-plus.png");
  return (
    <ListItem>
      <Box d="flex" padding="4" bg="gray" boxShadow="lg">
        <Image
          borderRadius="sm"
          src={data.company_logo}
          boxSize="90px"
          objectFit="cover"
          fallbackSrc={fallbackImage}
        />
        <Wrap justify="space-between" w="100%" ml={3}>
          <Stack>
            <Text fontSize="xs" fontWeight="bold">
              {data.company}
            </Text>
            <Text fontSize={['xs', 'sm']}>{data.title}</Text>
            <Box>
              <Badge colorScheme="green" variant="outline">
                {data.type}
              </Badge>
            </Box>
          </Stack>
          <Flex align="flex-end" justifyContent="flex-end">
            <Flex align="center">
              <CompassIcon size={12} />
              <Text fontSize="xs" mx={1}>
                {data.location}
              </Text>
            </Flex>
            <Flex align="center" ml={2}>
              <ClockIcon size={12} />
              <Text fontSize="xs" mx={1}>
                {moment(new Date(data.created_at)).startOf('day').fromNow()}
              </Text>
            </Flex>
          </Flex>
        </Wrap>
      </Box>
    </ListItem>
  );
}

export default ListJobItem;
