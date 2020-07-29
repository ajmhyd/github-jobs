import React from 'react';
import Link from 'next/link';

import { Job } from '../interfaces';

type Props = {
  data: Job;
};

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.type}
    </a>
  </Link>
);

export default ListItem;
