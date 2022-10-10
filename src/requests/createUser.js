import api from "../services/api";

export default function CreateUser(){
    const body = {
        name: 'Joaquim',
        email:'mail@mail.com',
        password: '123Seguro',
        role: 'admin',
    };
    return api.post('users', body);
}
