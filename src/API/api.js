import axios from "axios"

const instance = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "4cf20164-9a86-4f3e-8282-2ac6776524ff"
      }
})
export const userAPI = {
    getUsers(currentPage,pageSize) {
        return instance
        .get(
          `users?page=${currentPage}&count=${pageSize}`,
          
        )
        .then(res => res.data)
    },
    getAuth() {
      return instance.get("auth/me")
      .then(res => res.data)
    },
    setFollow(id) {
     return instance.post(`follow/${id}`)
      .then(res => res.data)
    },
    setUnFollow(id) {
      return instance.delete(`follow/${id}`)
      .then(res => res.data)
    },
    getProfile(userId) {
    return instance
      .get(
       `profile/${userId}`
      )
    }
}