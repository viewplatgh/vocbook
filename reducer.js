import _ from "lodash";
import { actionTypes } from "./actions";
import exampleState from "./exampleState";

export const initialState =
  process.env.NODE_ENV !== "production"
    ? exampleState
    : {
        index: 0,
        pages: [
          {
            index: 0,
            words: [""]
          }
        ]
      };

function reducer(state = initialState, action) {
  switch (action.type) {
    // case actionTypes.FAILURE:
    //   return {
    //     ...state,
    //     ...{ error: action.error }
    //   };

    // case actionTypes.INCREMENT:
    //   return {
    //     ...state,
    //     ...{ count: state.count + 1 }
    //   };

    // case actionTypes.DECREMENT:
    //   return {
    //     ...state,
    //     ...{ count: state.count - 1 }
    //   };

    // case actionTypes.RESET:
    //   return Object.assign({}, initialState);

    // case actionTypes.LOAD_DATA_SUCCESS:
    //   return {
    //     ...state,
    //     ...{ placeholderData: action.data }
    //   };

    // case actionTypes.TICK_CLOCK:
    //   return {
    //     ...state,
    //     ...{ lastUpdate: action.ts, light: !!action.light }
    //   };
    case actionTypes.PREVIOUS_WORD: {
      let nwState = _.cloneDeep(state);
      nwState.pages[nwState.index].index--;
      if (nwState.pages[nwState.index].index < 0) {
        nwState.pages[nwState.index].index =
          nwState.pages[nwState.index].words.length - 1;
      }
      return nwState;
    }

    case actionTypes.NEXT_WORD: {
      let nwState = _.cloneDeep(state);
      nwState.pages[nwState.index].index++;
      if (
        nwState.pages[nwState.index].index >=
        nwState.pages[nwState.index].words.length
      ) {
        nwState.pages[nwState.index].index = 0;
      }
      return nwState;
    }

    case actionTypes.EDIT_WORD: {
      let nwState = _.cloneDeep(state);
      nwState.pages[nwState.index].words[
        nwState.pages[nwState.index].index
      ] = Object.assign(
        {},
        nwState.pages[nwState.index].words[nwState.pages[nwState.index].index],
        action.payload
      );
      return nwState;
    }

    default:
      return state;
  }
}

export default reducer;
