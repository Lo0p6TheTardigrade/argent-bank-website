const initialState = {
  isVisible: true,
  isVisible2: true,
  isVisible3: true,
  displayedItems: 3,
  isLoggedIn: false,
  isLoggedOut: true,
  userName: '',
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
    case 'SET_LOGGED_OUT':
      return {
        ...state,
        isLoggedOut: action.payload,
      };
    case 'SET_USER_NAME':
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
