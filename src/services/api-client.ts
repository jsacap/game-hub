import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '20912036042944efa3f12e67dc8c263e'
    }
})

