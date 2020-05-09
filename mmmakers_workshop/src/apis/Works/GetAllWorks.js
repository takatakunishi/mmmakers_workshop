import Axios from "../Axios";

export async function getAllWorks() {
    try {
        console.log("in getallworks api");
        return await Axios.get('/aps/routerCgi.cgi/getAllData');
    } catch (error) {
        throw new Error(error);
    }
}