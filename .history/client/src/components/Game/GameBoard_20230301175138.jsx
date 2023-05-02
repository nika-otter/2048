import React, { Component } from "react";
import Layout from "../../components/UI/Layout";
import Field from "../../components/UI/Field";
import ControllPanel from "../../components/UI/ControllPanel";
import Button from "../../components/UI/Button";
import Score from "../../components/UI/Score";
import {
  moveCells,
  directions,
  initCells,
  removeAndIncreaseCells,
  populateField,
} from "logic";

class GameBoard extends Component {
  state = this.getNewState();

  mapKeyCodeToDirection = {
    KeyA: directions.LEFT,
    KeyS: directions.DOWN,
    KeyD: directions.RIGHT,
    KeyW: directions.UP,
  };

  newGame = () => {
    this.setState(this.getNewState());
  };

  getNewState() {
    return {
      cells: initCells(),
      score: 0,
    };
  }

  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeyPress);
  }

  handleKeyPress = async (event) => {
    if (["KeyA", "KeyS", "KeyD", "KeyW"].includes(event.code))
      this.setState((state) => ({
        ...state,
        cells: moveCells(state.cells, this.mapKeyCodeToDirection[event.code]),
      }));

    await delay(100);
    this.setState((state) => ({
      ...state,
      cells: removeAndIncreaseCells(state.cells),
    }));
    this.setState((state) => ({
      ...state,
      cells: populateField(state.cells),
    }));
  };

  render() {
    const { cells, score } = this.state;

    return (
      <Layout>
        <ControllPanel>
          <Button onClick={this.newGame}>New Game</Button>
          <Score>{score}</Score>
        </ControllPanel>
        <Field cells={cells} />
      </Layout>
    );
  }
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default GameBoard;
