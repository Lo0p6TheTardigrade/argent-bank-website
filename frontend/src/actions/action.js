import axios from 'axios';

const loginUser = async (credentials, dispatch, navigate) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', credentials);
    console.log(response.data);

    const responseData = response.data.body.token;
    const token = responseData;
    console.log(token);

    // localStorage.setItem('token', token);
    const tokenJSON = JSON.stringify(token);
    document.cookie = `userToken=${encodeURIComponent(tokenJSON)}; path=/; domain=localhost;`;
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

export default loginUser;

export const setDisplayedItems = (items) => {
  return {
    type: 'SET_DISPLAYED_ITEMS',
    payload: items,
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
