import Axios from "../Axios";

export async function postWork(postData, userInfo) {
  const info = userInfo;
  console.log(userInfo);
  console.log(postData);

  const dayData = new Date();
  const year = dayData.getFullYear();
  const month = dayData.getMonth();
  const date = dayData.getDate();
  const hours = dayData.getHours();
  const minutes = dayData.getMinutes();
  const seconds = dayData.getSeconds();
  const dayInf = year + "/" + month + "/" + date + "/" + hours + "/" + minutes + "/" + seconds;
  try {
    const data = {
      "WorkTag": "postData",
      "Title": postData.title,
      "Auth": postData.auther,
      "Corporator": ["none"],
      "Date": dayInf,
      "Url": [
        postData.url
      ],
      "Description": postData.description,
      "Tags": [
        "アイコン",
        "オリジナル"
      ],
      "Likes": {
        "Amount": 3,
        "Users": [
          "userIdx",
          "userIdy"
        ]
      }
    }
    const userinfo = {
      "email": info.userName,
      "password": info.password
    }

    var postdata = {
      "Work": data,
      "UserInfo": userinfo
    }


    return await Axios.post('/aps/routerCgi.cgi/PostData', postdata);
  } catch (e) {
    throw new Error(e);
  }
}
