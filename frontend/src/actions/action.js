import axios from 'axios';

// FUNCTION FOR COOKIE
function getCookie(cookieName) {
  const decodedCookie = document.cookie.split(';');

  for (let i = 0; i < decodedCookie.length; i++) {
    const cookie = decodedCookie[i].trim();
    const [name, value] = cookie.split('=');
    if (name === cookieName) {
      return decodeURIComponent(value);
    }
  }
  return null;
}

export const userTokenCookie = getCookie('userToken');

// LOGIN METHOD POST
export const loginUser = async (credentials, dispatch, navigate) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', credentials);

    const responseData = response.data.body.token;
    const token = responseData;
    // let userToken = responseData;

    const tokenJSON = token;
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 1 * 60 * 60 * 1000);
    const expiresUTC = expirationDate.toUTCString();
    document.cookie = `userToken=${encodeURIComponent(tokenJSON)}; expires=${expiresUTC}; path=/; domain=localhost;`;

    profilUser(token, dispatch, credentials);

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

// VARIABLES
export let userName;
export let firstName;
export let lastName;

// FUNCTION USER DATA FOR METHOD POST
function userDataPOST(firstName, lastName) {
  const userData = {
    firstName: firstName,
    lastName: lastName,
    userName: userName,
  };
  localStorage.setItem('user', JSON.stringify(userData));
}

// FUNCTION USER DATA FOR METHOD PUT
function userDataPUT(userNameChange, firstName, lastName) {
  const userData = {
    firstName: firstName,
    lastName: lastName,
    userName: userNameChange.userName,
  };
  localStorage.setItem('user', JSON.stringify(userData));
}

// PROFILE USER METHOD POST
export const profilUser = async (token, dispatch, credentials) => {
  try {
    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post('http://localhost:3001/api/v1/user/profile', credentials, config);

    userName = response.data.body.userName;
    firstName = response.data.body.firstName;
    lastName = response.data.body.lastName;

    userDataPOST(firstName, lastName);

    dispatchState(dispatch);
  } catch (error) {
    console.log('Erreur lors de la récupération du profil utilisateur :', error);
  }
};
// FUNCTION
function dispatchState(dispatch) {
  dispatch(setUserName(userName));
  dispatch(setFirstName(firstName));
  dispatch(setLastName(lastName));
}
function dispatchFirstLastName(dispatch) {
  dispatch(setFirstName(firstName));
  dispatch(setLastName(lastName));
}
console.log(userTokenCookie);
// UPDATE PROFILE METHOD PUT
export const updateProfilUser = async (dispatch, userName, userNameChange) => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${userTokenCookie}`,
    },
    body: userNameChange,
  };
  try {
    await axios.put('http://localhost:3001/api/v1/user/profile', config);

    userDataPUT(userNameChange, firstName, lastName);
    dispatchFirstLastName(dispatch);

    dispatch(setUserName(userNameChange.userName));
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
