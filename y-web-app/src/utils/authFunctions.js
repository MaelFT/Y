import axios from "axios";

export const checkAuth = async () => {
  try {
    const response = await axios.get('http://localhost:5000/users/check-auth', {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.error('Error checking authentication:', error);
  }
};

export default checkAuth;
