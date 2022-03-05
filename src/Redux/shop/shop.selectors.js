

import { createSelector } from "reselect";



const SelectShop = state => state.shop;

export const selectCollections = createSelector(
    [SelectShop],
    shop=> shop.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    // when we set our collections to null in shop reducer our app breaks when we refresh our collectionpage cos collection preview component cannnot read property null so we decded to change the code
    // to this if collections is true call collections[collectionUrlParam]  else null
    collections => (collections ? collections[collectionUrlParam] : null)
  );

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    // when we set our collections to null in shop reducer our app breaks cos we cannot map on null so we decded to change the code
    // collections => Object.keys(collections).map(key => collections[key]) 
    // to this if collections is true call object.keys else empty array
    collections => collections ?  Object.keys(collections).map(key => collections[key]) : []
  );