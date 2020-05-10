import Axios from "../Axios";

export async function getEachWork(request) {
    var req = "/aps/routerCgi.cgi/GetAWork/" + request.toString()
    console.log(req)
    try {
        console.log("in getEachWorks api");
        return await Axios.get(req)
    } catch (error) {
        throw new Error(error);
    }
}