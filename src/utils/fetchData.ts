import axios from 'axios';

export const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
