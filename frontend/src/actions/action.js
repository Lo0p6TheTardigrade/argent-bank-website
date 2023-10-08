import axios from 'axios';

let userToken;
export const loginUser = async (credentials, dispatch, navigate) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', credentials);

    const responseData = response.data.body.token;
    const token = responseData;
    userToken = responseData;

    const tokenJSON = JSON.stringify(token);
    document.cookie = `userToken=${encodeURIComponent(tokenJSON)}; path=/; domain=localhost;`;

    profilUser(userToken);
    // console.log('token', userToken);

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

export const profilUser = async (userToken, dispatch, navigate) => {
  try {
    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    };
    console.log('Token:', userToken);

    const response = await axios.post('http://localhost:3001/api/v1/user/profile', config);

    userName = response.data.firstName;
    console.log('Username:', userName);

    dispatch(setUserName(userName));

    // navigate('/home');
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
