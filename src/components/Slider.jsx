import styled from "styled-components";
import { sliderItems } from "../data";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import React from "react";

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
  z-index: 2;
  color: black;
  border-radius: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  margin: auto;
  :hover {
    background-color: gray;
    color: white;
    opacity: 0.5;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  transition: 1s all ease;
  /* changing the the slide by 100vw if it is 2nd slide then 2 * -100vw and so on*/
  transform: translateX(${(props) => props.slideindex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  padding: 50px;
  width: max-content;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 20px;
  font-size: 20px;
  cursor: pointer;
  border: 1px solid black;
  background-color: transparent;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      // if the slide index is greater than zero we can go prev slide if zero that go to last slide
      return setSlideIndex((prev) =>
        slideIndex > 0 ? prev - 1 : sliderItems.length - 1
      );
    } else {
      // or the index is less than last index then we can go next if it is equal it last index then go to first slide
      return setSlideIndex((prev) =>
        slideIndex < sliderItems.length - 1 ? prev + 1 : 0
      );
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosOutlined />
      </Arrow>
      <Wrapper slideindex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>BUY NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
