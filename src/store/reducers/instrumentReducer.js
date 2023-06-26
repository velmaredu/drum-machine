const initialState = {
    isInstrument1: true,
  };
  
  const instrumentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INSTRUMENT_SWITCH':
        return {
          ...state,
          isInstrument1: !state.isInstrument1,
        };
      default:
        return state;
    }
  };
  
  export default instrumentReducer;  