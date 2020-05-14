import Axios from "../Axios";

export async function registration(data) {
  const info = data.data;
  console.log(info)
  const userinfo = {
    "email": info.userName,
    "password": info.password
  }
  console.log(userinfo);
  try {
    console.log('in login api');
    return await Axios.post('/aps/routerCgi.cgi/signup', userinfo);
  } catch (error) {
    throw new Error(error);
  }
}
