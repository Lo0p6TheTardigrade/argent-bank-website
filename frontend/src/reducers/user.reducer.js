const initialState = {
  isVisible: true,
  isVisible2: true,
  isVisible3: true,
  displayedItems: 3,
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DISPLAYED_ITEMS':
      return {
        ...state,
        displayedItems: action.payload,
      };
    case 'SET_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
