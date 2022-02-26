import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
height: ${({ size }) => (size ? '380px' : '240px')};
min-width: 30%;
overflow:hidden;
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
margin: 0 7.5px 15px;


&:hover {
        cursor: pointer;
        
        & .background-image {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
        & .content {
            opacity: 0.9;
        }
    }
     &:first-child {
     margin-right: 7.5px;
     }
     &:last-child {
     margin-left: 7.5px;
     }

`;

const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;


const Content = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    opacity: 0.7;
    background-color: white;
    position: absolute;
`;

const Title = styled.span`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`;
const Subtitle = styled.span`
    font-weight: lighter;
     font-size: 16px;
`;

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