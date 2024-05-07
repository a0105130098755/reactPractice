import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 500px;
  margin: 10px auto;
`;

const Button = styled.div`
  margin: 2px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  border: 1px solid #ccc;
  padding: 10px 16px;
  color: white;
  border-radius: 2px;

  &.green {
    background-color: green;
  }

  &.orange {
    background-color: orange;
  }

  &.purple {
    background-color: purple;
  }
`;

const ColorBox = styled.div`
  width: 100%;
  height: 300px;
  border: 2px solid #ccc;
  border-radius: 15px;
  margin: 10px auto;
  background-color: ${(props) => props.bgColor || "transparent"};
`;

const ColorChanger = () => {
  const [color, setColor] = useState(null);

  return (
    <>
      <Container>
        <Button className="green" onClick={() => setColor("green")}>
          Green
        </Button>
        <Button className="orange" onClick={() => setColor("orange")}>
          Orange
        </Button>
        <Button className="purple" onClick={() => setColor("purple")}>
          Purple
        </Button>
      </Container>
      <ColorBox bgColor={color}></ColorBox>
    </>
  );
};

export default ColorChanger;
