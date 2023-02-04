import axios from 'axios'


const API = axios.create({
    baseURL: 'https://dc-backend.onrender.com'
})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('dcuser')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('dcuser')).token}`
    }
    return req
})




export const getIns = async () => {
    let res = await API.get("/institute/")
    return res
}

export const getMods = async (institute_id) => {
    let res = await API.get(`/institute/moderators/${institute_id}`)
    return res
}

export const createParticipant = async (pBody) => {
    let res = await API.post(`/institute/participant/add`, pBody)
    return res
}

export const getClasess = async (institute_id) => {
    let res = await API.get(`/institute/class/${institute_id}`)
    return res
}

export const getClassParticipants = async (class_id) => {
    let res = await API.get(`/institute/class/participants/${class_id}`)
    return res
}

export const addClass = async (classBody) => {
    console.log(classBody)
    let res = await API.post(`/institute/class/${classBody.institute_id}`, classBody)
    return res
}

export const createInstitute = async (institute) => {
    let res = await API.post("/institute/", institute)
    return res
}