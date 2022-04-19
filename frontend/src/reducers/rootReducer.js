const initialState = [];

export default function rootReducer(currentState = initialState, action) {
  switch (action.type) {
    case "CUSTOM_WIDGET_CREATE":
      return [...currentState, action.payload];
    default:
      return currentState;
  }
}
