

import { Container, Preview, Title } from "./collection-preview.styles";
import CollectionItem from "../collection-item/CollectionItem";

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


