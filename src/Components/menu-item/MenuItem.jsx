import React from 'react';
import { BackgroundImageContainer, Container, Content, Subtitle, Title } from './menu-item.style';


const MenuItem = ({item}) => {
    const {title,size,imageUrl} = item;
  return (
        <Container
        size={size}
       
         >
        <BackgroundImageContainer
        className='background-image'
        imageUrl={imageUrl}
        />
        <Content className='content'>
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>SHOP NOW</Subtitle>
        </Content>
    </Container>
  );
};

export default MenuItem;
