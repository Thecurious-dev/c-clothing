import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../Components/collection-item/CollectionItem';

import { selectCollection } from '../../Redux/shop/shop.selectors';

import {CollectionPageContainer,CollectionTitle,CollectionItemsContainer} from './collection-page.style';


// this page displays one of the collection item(menu item) when the item is clicked

const CollectionPage = ({ collection }) => {
  console.log(collection);
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);




