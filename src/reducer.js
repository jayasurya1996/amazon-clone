export const initialState = {
  baseket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        baseket: [...state.baseket, action.item],
      };

    default:
      return state;
  }
};
