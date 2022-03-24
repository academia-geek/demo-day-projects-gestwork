import { typesProcess } from "../types/types";

export { typesProcess } from "../types/types";

const inicialState = {
  process: [],
};

export const processReducers = (state = inicialState, action) => {
  switch (action.type) {
    case typesProcess.add:
      return {
        process: [action.payload],
      };

    default:
      return state;
  }
};
