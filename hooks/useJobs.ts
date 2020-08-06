import useSWR from 'swr';

import { Job } from '../interfaces';
import fetch from '../lib/fetch';

const useJobs = (query: string) => {
  const { data, error } = useSWR<Job[]>(query, fetch);

  return {
    jobs: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useJobs;
