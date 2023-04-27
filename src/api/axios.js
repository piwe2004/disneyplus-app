import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key: "ec44884fb5c610059117c80d3ccfc062",
        language: "ko-KR"
    }
})

export default instance;