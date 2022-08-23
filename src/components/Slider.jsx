import styled from "styled-components"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import { sliderItems } from "../data";

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
`;

const Arrow = styled.div`
width: 50px;
height: 50px;
display: flex;
align-items: center;
justify-conent: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`;

const Wrapper = styled.div`
height: 100%;
display: flex;
transform: translateX(${props => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
`;


const ImgContainer = styled.div`
height: 100%;
flex:1;
padding-bottom: 80px
`;

const Img = styled.img`
height: 90vh;
padding-left: 80px;
`;

const InfoContainer = styled.div`
flex:1;
padding-left: 90px;
`;
 
const Title = styled.h1`
font-size: 70px;
`;

const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;

const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
 const handleClick = (direction) => {
  // slider direction 
  if(direction==="left"){
    setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2 );
  } else {
    setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  }
 };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
       <ArrowBackIosIcon/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        { sliderItems.map(item=> (
       <Slide key={item.id}>
       <ImgContainer>
       <Img src={item.img} />
       </ImgContainer>
       <InfoContainer>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
        <Button>SHOP NOW</Button>
       </InfoContainer>
       </Slide>
       ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon/>
      </Arrow>
    </Container>
  )
}

export default Slider
