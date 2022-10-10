import api from "../services/api";

export default function AllArtists(){
    return api.get('artists', { name, nationality, image});
}