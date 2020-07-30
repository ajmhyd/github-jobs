import { Avatar, Badge, Box, Flex, Image, ListItem, Text } from '@chakra-ui/core';
import moment from 'moment';
import { Job } from '../interfaces';

type Props = {
  data: Job;
};

const ListJobItem = ({ data }: Props) => (
  <ListItem>
    <Box padding="4" bg="gray" boxShadow="lg" >
      <Flex>
        <Image borderRadius="sm" src={data.company_logo} boxSize="90px"
          objectFit="cover" fallbackSrc="https://via.placeholder.com/150" />
        <Box ml="3">
          <Text fontSize="xs" fontWeight="bold">{data.company}</Text>
          <Text fontSize={["xs", "sm"]}>{data.title}</Text>
          <Badge colorScheme="green" variant="outline">{data.type}</Badge>
        </Box>
        <Box display={{ xs: "flex" }} justifyItems="flex-end" alignItems="flex-end">
          <Text fontSize="xs">{data.location}</Text>
          <Text fontSize="xs">{moment(data.created_at).startOf('day').fromNow()}</Text>
        </Box>
      </Flex>
    </Box>
  </ListItem>
);

export default ListJobItem;
