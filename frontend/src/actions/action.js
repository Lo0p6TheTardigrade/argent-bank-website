import axios from 'axios';

let userToken;
function getCookie(cookieName) {
  const name = cookieName + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');

  for (const cookie of cookieArray) {
    const trimmedCookie = cookie.trim();
    if (trimmedCookie.indexOf(name) === 0) {
      let token = trimmedCookie.substring(name.length, trimmedCookie.length);
      token = token.replace(/['"]+/g, '');
      return token;
    }
  }
  return null;
}

export const userTokenCookie = getCookie('userToken');

export const loginUser = async (credentials, dispatch, navigate) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', credentials);

    const responseData = response.data.body.token;
    const token = responseData;
    userToken = responseData;

    const tokenJSON = JSON.stringify(token);
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

export let userName;
export let firstName;
export let lastName;

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

    const userData = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
    };
    localStorage.setItem('user', JSON.stringify(userData));

    dispatchState(dispatch);
  } catch (error) {
    console.log('Erreur lors de la récupération du profil utilisateur :', error);
  }
};
function dispatchState(dispatch) {
  dispatch(setUserName(userName));
  dispatch(setFirstName(firstName));
  dispatch(setLastName(lastName));
}
export const updateProfilUser = async (dispatch, userName, userNameChange) => {
  try {
    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
      body: userNameChange,
    };

    const response = await axios.put('http://localhost:3001/api/v1/user/profile', userNameChange, config);

    dispatch(setUserName(userNameChange.userName));
  } catch (error) {
    console.log('Erreur lors de la récupération du profil utilisateur :', error);
  }
};
export const updateProfilUserUseCookie = async (dispatch, userName, userNameChange) => {
  try {
    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userTokenCookie}`,
      },
      body: userNameChange,
    };
    const response = await axios.put('http://localhost:3001/api/v1/user/profile', userNameChange, config);

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
