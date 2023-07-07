import styled from "styled-components";
import Navbar from "../components/Navbar";

import React from "react";
import Slider from "../components/Slider";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Slider />
    </Container>
  );
};

export default Home;
