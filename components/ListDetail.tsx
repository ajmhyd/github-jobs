import { Heading } from '@chakra-ui/core';
import { Job } from '../interfaces';

type Props = {
  job: Job
}
const ListDetail = ({ job }: Props) => {

  return (
    <Heading as="h1" size="2xl">{job.title}</Heading>
  );
};

export default ListDetail;
