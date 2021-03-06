import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

const GET_COLLECTIIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsOverviewContainer = () => (
  <Query query={GET_COLLECTIIONS}>
    {({ loading, data }) => {
      if (loading) return <Spinner />;
      return <CollectionOverview collections={data.collections} />;
    }}
  </Query>
);

export default CollectionsOverviewContainer;
