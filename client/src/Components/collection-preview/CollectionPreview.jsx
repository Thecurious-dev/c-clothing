

import { Container, Preview, Title } from "./collection-preview.styles";
import CollectionItem from "../collection-item/CollectionItem";
import {  useNavigate } from "react-router-dom";

const CollectionPreview = ({title,items, history, match, routeName}) => {
  let navigate = useNavigate();
  return (
      <Container>
          <Title onClick={() => navigate(`${routeName}`)}>
            {title.toUpperCase()}
          </Title>
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


