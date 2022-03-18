import { connect } from "react-redux";
import { addItem } from "../../Redux/cart/cart.action";
import { AddButton, BackgroungImage, 
        CollectionFooterContainer,
         CollectionItemContainer, 
         NameContainer, 
         PriceContainer } from "./collection-item.styles";


const CollectionItem = ({item,addItem}) => {
  const {imageUrl,name,price} = item
  return (
      <CollectionItemContainer>
          <BackgroungImage className='image' imageUrl={imageUrl} />
          <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
          </CollectionFooterContainer>
          <AddButton onClick={()=>addItem(item)} inverted>Add item</AddButton>

      </CollectionItemContainer>

  );
};

const MapDispatchToProps = dispatch =>({
  addItem : item => dispatch(addItem(item))
})

export default connect (null,MapDispatchToProps)(CollectionItem);

