export const actionTypes = {
  FAILURE: "FAILURE",
  PREVIOUS_PAGE: "PREVIOUS_PAGE",
  NEXT_PAGE: "NEXT_PAGE",
  PREVIOUS_WORD: "PREVIOUS_WORD",
  NEXT_WORD: "NEXT_WORD",
  EDIT_WORD: "EDIT_WORD",
  RESET: "RESET",
  LOAD_DATA: "LOAD_DATA",
  LOAD_DATA_SUCCESS: "LOAD_DATA_SUCCESS",
  START_CLOCK: "START_CLOCK",
  TICK_CLOCK: "TICK_CLOCK"
};

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error
  };
}

export function previousPage() {
  return { type: actionTypes.PREVIOUS_PAGE };
}

export function nextPage() {
  return { type: actionTypes.NEXT_PAGE };
}

export function previousWord() {
  return { type: actionTypes.PREVIOUS_WORD };
}

export function nextWord() {
  return { type: actionTypes.NEXT_WORD };
}

export function editWord(payload) {
  return { type: actionTypes.EDIT_WORD, payload };
}

export function reset() {
  return { type: actionTypes.RESET };
}

export function loadData() {
  return { type: actionTypes.LOAD_DATA };
}

export function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data
  };
}

export function startClock() {
  return { type: actionTypes.START_CLOCK };
}

export function tickClock(isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now()
  };
}
