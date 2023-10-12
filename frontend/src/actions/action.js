import axios from 'axios';

let userToken;
function userCredentials(credentials, token) {
  localStorage.setItem('email', credentials.email);
  localStorage.setItem('password', credentials.password);
  localStorage.setItem('token', token);
}
export const loginUser = async (credentials, dispatch, navigate) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', credentials);

    const responseData = response.data.body.token;
    const token = responseData;
    userToken = responseData;
    console.log('credential', credentials);
    userCredentials(credentials, token);

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

    console.log(userName, firstName, lastName);
    console.log('dispatching', dispatch(setUserName(userName)), dispatch(setFirstName(firstName)), dispatch(setLastName(lastName)));
    // updateProfilUser(userName, userToken);
    dispatch(setUserName(userName));
    dispatch(setFirstName(firstName));
    dispatch(setLastName(lastName));
  } catch (error) {
    console.log('Erreur lors de la récupération du profil utilisateur :', error);
  }
};
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
