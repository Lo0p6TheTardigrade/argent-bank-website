const initialState = {
  isVisible: true,
  isVisible2: true,
  isVisible3: true,
  displayedItems: 3,
  isLoggedIn: false,
  isLoggedOut: true,
  userName: '',
  firstName: '',
  lastName: '',
  isOpen: false,
  email: localStorage.getItem('email'),
  password: localStorage.getItem('password'),
  token: localStorage.getItem('token'),
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
    case 'SET_FIRST_NAME':
      return {
        ...state,
        firstName: action.payload,
      };
    case 'SET_LAST_NAME':
      return {
        ...state,
        lastName: action.payload,
      };
    case 'SET_IS_OPEN':
      return {
        ...state,
        isOpen: action.payload,
      };
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload,
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.payload,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
