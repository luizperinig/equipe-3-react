import api from "../services/api";

export default function CreateArtist(){
    const body = {
        name: 'Royal Blood',
        nationality: 'England',
        image: 'https://i.scdn.co/image/ab6761610000f178027d7f808590b06dd08f7e0f',
    };
    return api.post('artists', body);
}