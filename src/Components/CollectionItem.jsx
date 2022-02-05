import styled from "styled-components";


const CollectionItem = ({item}) => {
  const {imageUrl,name,price} = item
  return (
      <CollectionItemContainer>
          <BackgroungImage className='image' imageUrl={imageUrl} />
          <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
          </CollectionFooterContainer>

      </CollectionItemContainer>

  );
};

export default CollectionItem;


const CollectionItemContainer = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;

  &:hover {
    .image {
      opacity: 0.8;
    }
  }
`;


const BackgroungImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

const CollectionFooterContainer = styled.div`
   width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

`;

const NameContainer = styled.span`
  width: 90%;
   margin-bottom: 15px;
`

const PriceContainer = styled.span`
   width: 10%;
`