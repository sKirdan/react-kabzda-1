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
        return instans.post(`follow/${userId}`)
            .then(response => response.data)
    },

    getProfile(userId) {
        console.warn('Obsolete method. Use profileAPI')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instans.get(`profile/` + userId)

    },
    getStatus(userId) {
        return instans.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instans.put('profile/status', { status: status })
    },
    savePhoto(photoFile) {
        const formData = new formData()
        formData.append("image", photoFile)
        return instans.put('profile/photo', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
    },
    saveProfile(profile){
        return instans.put('profile', profile);
    }

}

export const authAPI = {
    me() {
        return instans.get(`auth/me`);
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instans.post(`auth/login`, { email, password, rememberMe, captcha });
    },
    logout() {
        return instans.delete(`auth/login`);
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instans.get(`security/get-captcha-url`);
    }
}