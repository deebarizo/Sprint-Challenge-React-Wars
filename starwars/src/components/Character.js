import React from "react";
import styled from "styled-components";

const CharacterDiv = styled.div`
  border: 1px solid black;
  width: 70%;
  margin: 2rem auto;
  padding: 0 2rem;
`;

const ParagraphDiv = styled.div`
  width: 830px;
  margin: 2.5% auto;
  text-align: left;
  @media (max-width: 900px) {
    width: 90%;
    margin-left: 6%;
    margin-right: 6%;
  }
`;

export default function Character(props) {
  const { name, gender, hair_color } = props.character;

  return (
    <CharacterDiv>
      <h2>{name}</h2>
      <ParagraphDiv>Gender: {gender}</ParagraphDiv>
      <ParagraphDiv>Hair Color: {hair_color}</ParagraphDiv>
    </CharacterDiv>
  );
}
