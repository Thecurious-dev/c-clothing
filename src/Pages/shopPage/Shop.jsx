

import {  Route } from 'react-router-dom';
import CollectionsOverview from '../../Components/collection-overview/CollectionsOverview';
import CollectionPage from '../collection-page/CollectionPage';
import { Container } from './shop-page.style';


const Shop = ({ match }) => (
  <Container className='shop-page'>
      
          <Route exact path={`${match.path}`} component={CollectionsOverview} />
          <Route path={`${match.path}/:collectionId`} component={CollectionPage} />

      
  </Container>
);



export default  Shop;


