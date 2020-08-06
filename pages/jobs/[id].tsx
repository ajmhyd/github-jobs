import { Box } from '@chakra-ui/core';
import { GetServerSideProps } from 'next';

import { Job } from '../../interfaces';
import Apply from '../../components/Apply';
import Layout from '../../components/Layout';
import ListDetail from '../../components/ListDetail';

type Props = {
  job: Job;
}

const JobDetailPage = ({ job }: Props) => {

  return (
    <Layout title={`Github Jobs | ${job.company}`}>
      <Box display={{ md: 'flex' }}>
        <Box maxW="xs" mr={4}>
          <Apply howToApply={job.how_to_apply} />
        </Box>
        <ListDetail job={job} />
      </Box>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jobs.github.com/positions/${id}.json?markdown=true`);
  const job = await res.json();

  return {
    props: { job }
  }
}

export default JobDetailPage;
