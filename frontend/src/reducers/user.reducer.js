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
  modal1IsOpen: false,
  modal2IsOpen: false,
  modal3IsOpen: false,
  balance: '',
  seller: '',
  amountIN: '',
  amountOUT: '',
  buyArticles: '',
  operationDate: '',
  button1: true,
  button2: true,
  button3: true,
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
    case 'SET_IS_OPEN_MODAL_1':
      return {
        ...state,
        modal1IsOpen: action.payload,
      };
    case 'SET_IS_OPEN_MODAL_2':
      return {
        ...state,
        modal2IsOpen: action.payload,
      };
    case 'SET_IS_OPEN_MODAL_3':
      return {
        ...state,
        modal3IsOpen: action.payload,
      };
    case 'SET_BALANCE':
      return {
        ...state,
        balance: action.payload,
      };
    case 'SET_SELLER':
      return {
        ...state,
        seller: action.payload,
      };
    case 'SET_AMOUNT_IN':
      return {
        ...state,
        amountIN: action.payload,
      };
    case 'SET_AMOUNT_OUT':
      return {
        ...state,
        amountOUT: action.payload,
      };
    case 'SET_BUY_ARTICLE':
      return {
        ...state,
        buyArticles: action.payload,
      };
    case 'SET_OPERATION_DATE':
      return {
        ...state,
        operationDate: action.payload,
      };
    case 'SET_BUTTON_1':
      return {
        ...state,
        button1: action.payload,
      };
    case 'SET_BUTTON_2':
      return {
        ...state,
        button2: action.payload,
      };
    case 'SET_BUTTON_3':
      return {
        ...state,
        button3: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
