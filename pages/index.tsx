import Link from 'next/link';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Button,
} from '@chakra-ui/core';
import Layout from '../components/Layout';
import Search from '../components/Search';

const IndexPage = () => (
  <Layout title="Github Jobs">
    <Search />
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>Accordion 1</AccordionButton>
          <AccordionPanel>Welcome home</AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Button colorScheme="red" marginTop="40px">
        Welcome
      </Button>
    </p>
  </Layout>
);

export default IndexPage;
