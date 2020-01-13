import { AgeFunction } from "../general/variables";

const initialState = {
  age: 20
};

const up = AgeFunction.up;
const down = AgeFunction.down;

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case up:
      newState.age += action.value;
      break;

    case down:
      newState.age -= action.value;
      break;
  }
  return newState;
};

export default reducer;
