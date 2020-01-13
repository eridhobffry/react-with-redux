import { AgeFunction, AgeAsync } from "../general/variables";

const initialState = {
  age: 20
};

const up = AgeFunction.up;
const down = AgeFunction.down;

const upAsync = AgeAsync.up;
const downAsync = AgeAsync.down;

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case upAsync:
      newState.age += action.value;
      break;

    case down:
      newState.age -= action.value;
      break;
  }
  return newState;
};

export default reducer;
