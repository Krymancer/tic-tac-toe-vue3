import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { checkTie, checkWin } from "../util/checkWin";
import { makeAIMove } from "../util/gameAI";

export interface State {
  player: boolean;
  turn: boolean;
  boardValue: string;
  wins: number;
  loses: number;
  ties: number;
  gameState: string;
  oponent: boolean;
  round: string;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    player: true, // true = X, false = O
    turn: true, // true = X, false = O
    boardValue: "---------", // - = empty, X = X, O = O
    wins: 0, // X wins
    loses: 0, // O wins
    ties: 0, // ties
    gameState: "menu", // menu, playing
    oponent: true, // true = CPU, false = Player
    round: "", // "" = playing, won = X won, lost = O won, tie = tie
  },
  mutations: {
    toogleMarker(state) {
      state.player = !state.player;
    },
    makeMove(state, { index, value }) {
      state.boardValue =
        state.boardValue.slice(0, index) +
        value +
        state.boardValue.slice(index + 1);
      state.turn = !state.turn;
    },
    setGameState(state, gameState) {
      switch (gameState) {
        case "win": {
          state.wins++;
          break;
        }
        case "lose": {
          state.loses++;
          break;
        }
        case "tie": {
          state.ties++;
          break;
        }
      }
      state.gameState = gameState;
    },
    gamEnd(state, round) {
      state.round = round;
    },
    setOponent(state, oponent) {
      state.oponent = oponent;
    },
    resetGame(state) {
      state.boardValue = "---------";
      state.turn = true;
      state.gameState = "playing";
    },
    quitGame(state) {
      state.boardValue = "---------";
      state.turn = true;
      state.gameState = "menu";
      state.wins = 0;
      state.loses = 0;
      state.ties = 0;
      state.player = true;
      state.oponent = true;
    },
  },
  getters: {
    getPlayer(state) {
      return state.player;
    },
    getTurn(state) {
      return state.turn;
    },
    getBoardValue(state) {
      return state.boardValue;
    },
    getWins(state) {
      return state.wins;
    },
    getLoses(state) {
      return state.loses;
    },
    getTies(state) {
      return state.ties;
    },
    getGameState(sate) {
      return sate.gameState;
    },
    getRound(state) {
      return state.round;
    },
    getOpponent(state) {
      return state.oponent;
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
