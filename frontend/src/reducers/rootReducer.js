const initialState = {
  customWidgets: [],
};

export default function rootReducer(currentState = initialState, action) {
  switch (action.type) {
    case "CUSTOM_WIDGET_CREATE":
      return {
        ...currentState,
        customWidgets: [...currentState.customWidgets, action.payload],
      };
    default:
      return currentState;
  }
}
