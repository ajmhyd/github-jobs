import Layout from '../components/Layout';
import List from '../components/List';
import Location from '../components/Location';
import Search from '../components/Search';
import useJobs from '../hooks/useJobs';

import { Box } from '@chakra-ui/core';

const IndexPage = () => {

  const { jobs, isLoading, isError } = useJobs();

  return (
    <Layout title="Github Jobs">
      <Search />
      <Box display={{ md: "flex" }} alignItems="flex-start">
        <Location />
        <List items={jobs} isLoading={isLoading} />
      </Box>
    </Layout>
  )
}

export default IndexPage;
