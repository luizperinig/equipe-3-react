import api from "../services/api";

export default function Login(){
    const body = {
        email: 'mail@mail',
        password: 'Seguro123'
    };
    return api.post('users/login', body);
}