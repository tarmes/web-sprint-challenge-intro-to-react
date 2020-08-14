// Write your Character component here
import React from 'react';
import styled from "styled-components";

const NewCard = styled.div`
  background: rgba(255, 238, 202, 0.6);
  color: white;
  width: 90%;
  height: 350px;
  margin: 10px auto;
  border-radius: 30px;
  justify-content: space-between;
  @media (max-width: 500px) {
    width: 80%;
  }
`;

const Name = styled.h1`
  color: #030032;
`;

const Characteristics = styled.h3`
  color: #871127;
`;

const Traits = styled.ul`
  font-size: 1.25rem;
  color: #001040;
  justify-content: center;
`;

const Headers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CharacterCard = (props) => {
  return (
    <>
      <NewCard>
        <Headers>
          <Name>{props.name}</Name>
          <Characteristics>Physical Characteristics</Characteristics>
        </Headers>
        <Traits>
          <li>Eye Color: {props.eyecolor} </li>
          <li>Skin Color: {props.skincolor}</li>
          <li>Hair Color: {props.haircolor} </li>
          <li>Gender: {props.gender}</li>
          <li>Height: {props.height} centimeters / {(Math.floor(props.height/2.54))} inches</li>
          <li>Mass: {props.mass} kilograms / {(Math.floor(props.mass*2.205))} pounds</li>

        </Traits>
      </NewCard>
    </>
  );
};

export default CharacterCard;