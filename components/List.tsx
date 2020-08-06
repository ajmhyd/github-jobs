import { Heading, List } from '@chakra-ui/core';

import ListItem from './ListItem';
import { Job } from '../interfaces';

type Props = {
  items: Job[];
};

const JobsList = ({ items }: Props) => (
  <>
    {
      items.length > 0 ? (
        <List spacing={3} >
          {items?.map((item) => (
            <ListItem key={item.id} data={item} />
          ))}
        </List >
      ) : (
          <Heading as="h1" size="2xl" mt={2}>No jobs match your query.</Heading>
        )
    }
  </>
);

export default JobsList;
