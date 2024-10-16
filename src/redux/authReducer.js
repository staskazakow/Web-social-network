import { userAPI } from "../API/api"

const SET_USER_DATA = "SET_USER_DATA"
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState,action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true
            }

        default: 
        return state
    }
}
export const getAuth = () => {
    return (dispath) => {
    userAPI.getAuth()
      .then((res) => {
        if(res.resultCode === 0) {
            let {id,email,login} = res.data
              dispath(setAuthUserData(id,email,login))
        }
    });
    }
}
export const setAuthUserData = (userId,email,login) => ({type:SET_USER_DATA,data:{userId,email,login}})
export default authReducer