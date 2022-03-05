

import { Component } from 'react';
import {  Route } from 'react-router-dom';
import CollectionsOverview from '../../Components/collection-overview/CollectionsOverview';
import CollectionPage from '../collection-page/CollectionPage';
import { Container } from './shop-page.style';
import { firestore, convertCollectionsSnapshotTomap } from '../../Firebase/Firebase.config';
import { connect } from 'react-redux';
import { updateCollections } from '../../Redux/shop/shop.actions';
import WithSpinner from '../../Components/with-spinner/WithSpinner';


// shop page is the one that knows when fecthing is completed

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)



class Shop extends Component {
  state={
    loading: true
  }
  //fetching collections from firestore
unSubscribeFromSnapshot = null


  componentDidMount = ()=>{
    const {updateCollections} = this.props
    const collectionRef = firestore.collection("collections");
//to get the data we use onSnapshot , whenever the collectionRef updates or whenvever the code gets run for the first time
// collectionRef will send the snapshot representing the whole of the collectionRef object array
   this.unSubscribeFromSnapshot=collectionRef.onSnapshot(async snapshot =>{
     // we decided to cast convertCollectionsSnapshotTomap to collectionMap which will be use as our payload in shop.actions
     const collectionsMap= convertCollectionsSnapshotTomap(snapshot);
     // we have all items in the shape we want , and update and store it
     updateCollections(collectionsMap);
     this.setState({loading:false});
    })
  }

  render() { 
    const {match} = this.props
    const {loading} = this.state
    return (
      <Container className='shop-page'>
         <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch =>({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
 
export default connect(null, mapDispatchToProps) (Shop);


