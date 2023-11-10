import axios from 'axios';

function getCookie(cookieName) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split('; ');

  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i];
    const [name, value] = cookie.split('=');
    if (name === cookieName) {
      // Supprimez les guillemets s'ils existent autour de la valeur du cookie
      const token = value.startsWith('"') && value.endsWith('"') ? value.slice(1, -1) : value;
      return token;
    }
  }
  return null;
}

export const loginUser = async (credentials, dispatch, navigate) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', credentials);

    const responseData = response.data.body.token;
    const token = responseData;

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
export const updateProfilUser = (userNameChange) => {
  return async (dispatch) => {
    const userTokenCookie = getCookie('userToken').trim();
    try {
      const config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${userTokenCookie}`,
        },
      };

      const response = await axios.put('http://localhost:3001/api/v1/user/profile', { userName: userNameChange }, config);

      if (response.status === 200) {
        const userData = JSON.parse(localStorage.getItem('user')) || {};
        userData.userName = userNameChange;
        localStorage.setItem('user', JSON.stringify(userData));
        dispatch(setUserName(userNameChange));
      }
    } catch (error) {
      console.log('Erreur lors de la récupération du profil utilisateur :', error);
    }
  };
};

export const setDisplayedItems = (items) => {
  return {
    type: 'SET_DISPLAYED_ITEMS',
    payload: items,
  };
};
export const setUserName = (userName) => {
  console.log(userName);
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
