import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7f418e56fc0749d8936650bf52020574'
    }
})

