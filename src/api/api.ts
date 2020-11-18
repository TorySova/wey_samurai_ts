import Axios from 'axios';

const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "67477460-bd4f-44a1-875d-97f09390d59f"
    }
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, )
            .then(response => response.data)
    },
    follow(userId:number) {
        return instance.post(`follow/${userId}` )
    },
    unFollow(userId:number) {
        return instance.delete(`follow/${userId}`)
    }      
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/`+ userId)
    },
    getStatus(userId: string) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put('/profile/status', {status})
    }
}

export const authAPI = {
    loginMe(){
        return instance.get(`auth/me`)
    }
}



