
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/CollectionPreview';

import {  selectCollectionsForPreview } from '../../Redux/shop/shop.selectors';

import { CollectionsOverviewContainer } from './collection-overview.style';

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
  
    {collections.map(({ id, ...otherCollectionProps }) => (
      
      <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
  </CollectionsOverviewContainer>
);


const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);