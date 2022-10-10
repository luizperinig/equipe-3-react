import api from "../services/api";

export default function Logout(){
    return api.post('users/logout');
}