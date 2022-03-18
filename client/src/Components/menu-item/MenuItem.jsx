import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackgroundImageContainer, ContentContainer, ContentSubtitle, ContentTitle, MenuItemContainer } from './menu-item.style';


const MenuItem = ({ item:{title, imageUrl, size,linkUrl},  history,  match }) => {
  let navigate = useNavigate();

  return(
      <MenuItemContainer
        size={size}
        onClick={() => navigate(`${linkUrl}`)}
      >
        <BackgroundImageContainer
          className='background-image'
          imageUrl={imageUrl}
        />
        <ContentContainer className='content'>
          <ContentTitle>{title.toUpperCase()}</ContentTitle>
          <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
      </MenuItemContainer>
    )
 }
export default MenuItem;
