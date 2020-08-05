import { GetServerSideProps } from 'next';
import ReactMarkdown from 'react-markdown';
import { Job } from '../../interfaces';
import Layout from '../../components/Layout';
import Apply from '../../components/Apply';
import ListDetail from '../../components/ListDetail';

type Props = {
  job: Job;
}

const JobDetailPage = ({ job }: Props) => {

  return (
    <Layout title={`Github Jobs | ${job.company}`}>
      <Apply howToApply={job.how_to_apply} />
      <ListDetail job={job} />
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
