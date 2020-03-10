import Axios from "../Axios";

export async function registration(data) {
  const info = data;
  console.log(info);
  try {
    console.log('in login api');
    return await Axios.post('/userInfo',data);
  } catch (error) {
    throw new Error(error);
  }
}
