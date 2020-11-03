import { follow } from './../redux/usersReducer';
import Axios from 'axios';

const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "3630c63c-1fb1-408e-b7bf-e8e014da7896"
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
    },
    loginMe(){
        return instance.get(`auth/me`)
    },
    userID(userId: string) {
        return instance.get(`profile/`+ userId)
    }
}



