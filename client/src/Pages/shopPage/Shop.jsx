

import {  useEffect } from 'react';
import {  Route, Routes } from 'react-router-dom';
import CollectionsOverview from '../../Components/collection-overview/CollectionsOverview';
import CollectionPage from '../collection-page/CollectionPage';
import { Container } from './shop-page.style';
import WithSpinner from '../../Components/with-spinner/WithSpinner';
import { selectIsCollectionsFetching, selectIsCollectionsLoaded } from '../../Redux/shop/shop.selectors';
import { fetchCollectionsStartAsync } from '../../Redux/shop/shop.actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// shop page is the one that knows when fecthing is completed

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)



const Shop =()=>  {
  const isCollectionFetching = useSelector(selectIsCollectionsFetching);
  const isCollectionLoaded = useSelector(selectIsCollectionsLoaded);
  const dispatch = useDispatch();
  // state={
  //   loading: true
  // }
  //fetching collections from firestore
// unSubscribeFromSnapshot = null
  useEffect(() => {
    dispatch (fetchCollectionsStartAsync())
  
   
  }, [dispatch])
  

  
//     const {updateCollections} = this.props
//     const collectionRef = firestore.collection("collections");
// //to get the data we use onSnapshot , whenever the collectionRef updates or whenvever the code gets run for the first time
// // collectionRef will send the snapshot representing the whole of the collectionRef object array
//    this.unSubscribeFromSnapshot=collectionRef.onSnapshot(async snapshot =>{
//      // we decided to cast convertCollectionsSnapshotTomap to collectionMap which will be use as our payload in shop.actions
//      const collectionsMap= convertCollectionsSnapshotTomap(snapshot);
//      // we have all items in the shape we want , and update and store it
//      updateCollections(collectionsMap);
//      this.setState({loading:false});
    // })
  

 

    return (
      <Container className='shop-page'>
        <Routes>

         <Route
          exact
          path={'/'}
          element={<CollectionsOverviewWithSpinner isLoading={isCollectionFetching}  />}
         
        />
        <Route
          path={'/:collectionId'}
          element={ <CollectionPageWithSpinner isLoading={!isCollectionLoaded} />}
          
        />
        </Routes>
      </Container>
    );
  }

// const mapStateToProps = createStructuredSelector ({
//   isCollectionFetching: selectIsCollectionsFetching,
//   isCollectionLoaded : selectIsCollectionsLoaded,

// })

// const mapDispatchToProps = dispatch =>({
//   fetchCollectionsStartAsync: ()=> dispatch(fetchCollectionsStartAsync())
// })
 
export default Shop;


