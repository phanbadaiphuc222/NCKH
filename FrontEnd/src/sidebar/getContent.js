import axios from "axios";

const BASE_URL = `http://localhost:8080/`
// const TOKEN = store.getState().user.currentUser.accessToken;

// console.log(TOKEN)

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})