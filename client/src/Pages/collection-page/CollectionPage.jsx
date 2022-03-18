import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CollectionItem from '../../Components/collection-item/CollectionItem';

import { selectCollection } from '../../Redux/shop/shop.selectors';

import {CollectionPageContainer,CollectionTitle,CollectionItemsContainer} from './collection-page.style';


// this page displays one of the collection item(menu item) when the item is clicked

const CollectionPage = () => {
  const {collectionId}= useParams()
  const collection = useSelector(selectCollection(collectionId))
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

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state)
// });

export default CollectionPage;




