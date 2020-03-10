import Axios from "../Axios";

export async function login(data) {
  const info = data;
  console.log(info);
  try {
    console.log('in login api');
    return await Axios.post('/users',data);
  } catch (error) {
    throw new Error(error);
  }
}
