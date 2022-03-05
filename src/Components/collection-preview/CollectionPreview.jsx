

import { Container, Preview, Title } from "./collection-preview.styles";
import CollectionItem from "../collection-item/CollectionItem";
import { withRouter } from "react-router-dom";

const CollectionPreview = ({title,items, history, match, routeName}) => {
  return (
      <Container>
        
          <Title onClick={() => history.push(`${match.path}/${routeName}`)}>
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

export default withRouter (CollectionPreview);


