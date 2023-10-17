import axios from 'axios';

let userToken;
export const loginUser = async (credentials, dispatch, navigate) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', credentials);

    const responseData = response.data.body.token;
    const token = responseData;
    userToken = responseData;
    console.log('credential', credentials);

    const tokenJSON = JSON.stringify(token);
    document.cookie = `userToken=${encodeURIComponent(tokenJSON)}; path=/; domain=localhost;`;

    profilUser(userToken, dispatch, credentials);

    dispatch(setLoggedIn(true));
    navigate('/home');
  } catch (error) {
    console.log(error);
    dispatch({
      type: 'LOGIN_FAILURE',
      payload: error.message,
    });
  }
};

export let userName;
export let firstName;
export let lastName;

export let balance;
export let saving;
export let card;
export let seller;
export let amountIN;
export let amountOUT;
export let buyArticles;
export let operationDate;

export const profilUser = async (userToken, dispatch, credentials) => {
  try {
    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    };

    const response = await axios.post('http://localhost:3001/api/v1/user/profile', credentials, config);

    userName = response.data.body.userName;
    firstName = response.data.body.firstName;
    lastName = response.data.body.lastName;
    balance = response.data.body.accountBalance.bank.balance;
    saving = response.data.body.accountBalance.bank.saving;
    card = response.data.body.accountBalance.bank.card;
    console.log('saving:', saving, 'card:', card);
    seller = response.data.body.accountBalance.operationOUTPUT.paid.description.seller;
    amountIN = response.data.body.accountBalance.operationINPUT.receive.amount;
    amountOUT = response.data.body.accountBalance.operationOUTPUT.paid.amount;
    buyArticles = response.data.body.accountBalance.operationOUTPUT.paid.description.article;
    operationDate = response.data.body.accountBalance.operationOUTPUT.paid.date;
    console.log(response.data.body.accountBalance);

    dispatchState(dispatch);
  } catch (error) {
    console.log('Erreur lors de la récupération du profil utilisateur :', error);
  }
};
function dispatchState(dispatch) {
  dispatch(setUserName(userName));
  dispatch(setFirstName(firstName));
  dispatch(setLastName(lastName));
  dispatch(setBalance(balance));
  dispatch(setSaving(saving));
  dispatch(setCard(card));
  dispatch(setSeller(seller));
  dispatch(setAmountIN(amountIN));
  dispatch(setAmountOUT(amountOUT));
  dispatch(setBuyArticle(buyArticles));
  dispatch(setOperationDate(operationDate));
}
export const updateProfilUser = async (userToken, dispatch, userName) => {
  try {
    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
      body: userName,
    };

    const response = await axios.put('http://localhost:3001/api/v1/user/profile', config);

    userName = response.data.body.userName;
    console.log('dispatching', dispatch(setUserName(userName)), dispatch(setFirstName(firstName)), dispatch(setLastName(lastName)));

    dispatch(setUserName(userName));
  } catch (error) {
    console.log('Erreur lors de la récupération du profil utilisateur :', error);
  }
};

export const setDisplayedItems = (items) => {
  return {
    type: 'SET_DISPLAYED_ITEMS',
    payload: items,
  };
};
export const setUserName = (userName) => {
  return {
    type: 'SET_USER_NAME',
    payload: userName,
  };
};
export const setFirstName = (firstName) => {
  return {
    type: 'SET_FIRST_NAME',
    payload: firstName,
  };
};
export const setLastName = (lastName) => {
  return {
    type: 'SET_LAST_NAME',
    payload: lastName,
  };
};

export const setLoggedIn = (isLoggedIn) => {
  return {
    type: 'SET_LOGGED_IN',
    payload: isLoggedIn,
  };
};

export const setLoggedOut = (isLoggedOut) => {
  return {
    type: 'SET_LOGGED_OUT',
    payload: isLoggedOut,
  };
};
export const setIsOpen = (isOpen) => {
  return {
    type: 'SET_IS_OPEN',
    payload: isOpen,
  };
};
export const setModal1IsOpen = (modal1IsOpen) => {
  return {
    type: 'SET_IS_OPEN_MODAL_1',
    payload: modal1IsOpen,
  };
};
export const setModal2IsOpen = (modal2IsOpen) => {
  return {
    type: 'SET_IS_OPEN_MODAL_2',
    payload: modal2IsOpen,
  };
};
export const setModal3IsOpen = (modal3IsOpen) => {
  return {
    type: 'SET_IS_OPEN_MODAL_3',
    payload: modal3IsOpen,
  };
};
export const setBalance = (balance) => {
  return {
    type: 'SET_BALANCE',
    payload: balance,
  };
};
export const setSaving = (saving) => {
  return {
    type: 'SET_SAVING',
    payload: saving,
  };
};
export const setCard = (card) => {
  return {
    type: 'SET_CARD',
    payload: card,
  };
};
export const setSeller = (seller) => {
  return {
    type: 'SET_SELLER',
    payload: seller,
  };
};
export const setAmountIN = (amountIN) => {
  return {
    type: 'SET_AMOUNT_IN',
    payload: amountIN,
  };
};
export const setAmountOUT = (amountOUT) => {
  return {
    type: 'SET_AMOUNT_OUT',
    payload: amountOUT,
  };
};
export const setBuyArticle = (buyArticles) => {
  return {
    type: 'SET_BUY_ARTICLE',
    payload: buyArticles,
  };
};
export const setOperationDate = (operationDate) => {
  return {
    type: 'SET_OPERATION_DATE',
    payload: operationDate,
  };
};
export const setButton1IsVisible = (button1IsVisible) => {
  return {
    type: 'SET_BUTTON_1_IS_VISIBLE',
    payload: button1IsVisible,
  };
};
export const setButton2IsVisible = (button2IsVisible) => {
  return {
    type: 'SET_BUTTON_2_IS_VISIBLE',
    payload: button2IsVisible,
  };
};
export const setButton3IsVisible = (button3IsVisible) => {
  return {
    type: 'SET_BUTTON_3_IS_VISIBLE',
    payload: button3IsVisible,
  };
};
