const initialState = {
    isPowerOn: true,
  };
  
  const powerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'POWER_SWITCH':
        return {
          ...state,
          isPowerOn: !state.isPowerOn,
        };
      default:
        return state;
    }
  };
  
  export default powerReducer;  