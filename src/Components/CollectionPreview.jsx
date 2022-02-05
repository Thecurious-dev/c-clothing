import styled from "styled-components";
import CollectionItem from "./CollectionItem";

const CollectionPreview = ({title,items}) => {
  return (
      <Container>
          <Title>{title.toUpperCase()}</Title>
          <Preview>
            {items.filter((item, idx) => idx < 4)
                  .map(item => (
                <CollectionItem key={item.id} item={item}/>
            ))}

          </Preview>
      </Container>
  );
};

export default CollectionPreview;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;

    &:hover {
    color: grey;
  }

`


const Preview = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

`