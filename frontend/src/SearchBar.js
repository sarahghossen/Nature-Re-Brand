import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SearchBar = () => {
  const [searched, setSearched] = useState("");
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);
  const [pets, setPets] = useState();
  //   const [highlight, setHighlight] = useState(undefined);

  useEffect(() => {
    fetch("/pets")
      .then((res) => res.json())
      .then((data) => {
        setPets(data.data);
      });
  }, []);

  let filteredAnimals;

  if (pets && searched.length > 1) {
    filteredAnimals = pets.filter((pet) => {
      return (
        pet.name && pet.name.toLowerCase().includes(searched.toLowerCase())
      );
    });
  }

  return (
    <>
      <Container>
        <Div>
          <Input
            type="text"
            value={searched}
            onChange={(event) => {
              setSearched(event.target.value);
            }}
            onKeyDown={(ev) => {
              switch (ev.key) {
                case "ArrowUp": {
                  setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
                  return;
                }
                case "ArrowDown": {
                  setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
                  return;
                }
              }
            }}
          />
          <Button onClick={() => setSearched("")}>Clear</Button>
        </Div>
        {filteredAnimals && filteredAnimals.length > 0 && (
          <Ul>
            {filteredAnimals.map((suggestion, index) => {
              let startPosition = suggestion.name
                .toLowerCase()
                .indexOf(searched.toLowerCase());
              let endPosition = startPosition + searched.length - 1;
              let firstHalf = suggestion.name.slice(0, endPosition + 1);
              let secondHalf = suggestion.name.slice(endPosition + 1);

              const isSelected = selectedSuggestionIndex === index;

              return (
                <Suggestion
                  key={suggestion.name}
                  style={{
                    background: isSelected
                      ? //hover style
                        "hsla(247, 0%, 69%, 0.26)"
                      : "transparent",
                  }}
                  onMouseEnter={() => setSelectedSuggestionIndex(index)}
                >
                  <span>
                    <Prediction1>{firstHalf}</Prediction1>
                    <Prediction>{secondHalf}</Prediction>
                  </span>
                </Suggestion>
              );
            })}
          </Ul>
        )}
      </Container>
    </>
  );
};
const Container = styled.div`
  width: 280px;
`;

const Div = styled.div``;

const Input = styled.input`
  height: 25px;
  border-radius: 5px;
  border: 2px solid gray;

  &:hover {
    border: 2px solid black;
  }
`;

const Button = styled.button`
  width: 60px;
  height: 25px;
  color: black;
  background-color: white;
  border: 2px solid gray;
  border-radius: 5px;
  margin-left: 40px;

  &:hover {
    background-color: gray;
    color: white;
    transition: 300ms;
  }
`;

const Ul = styled.ul`
  box-shadow: 2px 4px 8px 4px lightgray;
  padding: 5px;
  /* line-height: 1.8; */
`;

const Suggestion = styled.div`
  margin: 10px;
  padding: 5px;
`;

const Prediction = styled.div`
  font-weight: bold;
`;

const Prediction1 = styled.div``;

export default SearchBar;
