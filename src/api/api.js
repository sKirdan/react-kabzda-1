import * as axios from 'axios'

const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "9a9f5dbc-f1e6-4b45-9ead-f8e42ffce811" }
})

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instans.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)

    },

    unfollow(userId) {
        return instans.delete(`follow/${userId}`)
            .then(response => response.data)
    },

    follow(userId) {
        debugger
        return instans.post(`follow/${userId}`)
            .then(response => response.data)

    }
}



