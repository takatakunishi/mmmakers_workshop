import Axios from 'axios'

export default Axios.create({
    baseURL: 'https://creatorsfantasyfpn.com/',
    withCredentials: true
})
