import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDgyZGU2NjJkYzA2NTQxMTY3OTcwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTcxNzAzOCwiZXhwIjoxNjc1OTc2MjM4fQ.THuHoc2ubztDnxKyl0UtdpIxBvWOM25Ja_K_OcxUJVU"
export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})