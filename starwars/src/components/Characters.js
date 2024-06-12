import React from "react";
import Character from "./Character";
import styled from "styled-components";

const CharactersDiv = styled.div`
  border-top: 1px solid black;
`;

const LoadingDiv = styled.div`
  margin-top: 20%;
  font-size: 1.5rem;
`;

export default function Characters(props) {
  const { characters } = props;

  if (characters.length === 0) {
    return (
      <CharactersDiv>
        <LoadingDiv>
          <h2>Loading...</h2>
        </LoadingDiv>
      </CharactersDiv>
    );
  }

  return (
    <CharactersDiv>
      {characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </CharactersDiv>
  );
}
