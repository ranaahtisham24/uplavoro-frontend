import { axiosBaseQuery } from "../axiosBaseQuery";
import {
    invalidRequest,
    register,
    authRequestLoading,
    login,
    logout,
    setUser,
} from "../slices/auth/authSlice";

export const registerUser = (data) => async (dispatch) => {
    try {
    //     let obj = {
    //         "name" : "dsfsd",
    //         "surname" : "",
    //         "email" : "customer13@uplarovo.com",
    //         "phone" : "",
    //         "fiscal_code" : "",
    //         "gender" : "M",
    //         "birth_date" : "2023-01-01",
    //         "birth_nation" : "",
    //         "birth_municipality" : "",
    //         "residence_address" : "",
    //         "residence_municipality" : "",
    //         "residence_province" : "",
    //         "residence_postalcode" : "",
    //         "password" : "112233"
    // }
        const res = await axiosBaseQuery({method: 'POST', url: '/api/register', body: data})
    } catch (e) {

    }
};

export const loginUser = (router, data) => async (dispatch) => {
    try {
        let obj = {
            email : data?.email,
            password : data?.password,
            "source-domain" : "web"
        }
        const res = await axiosBaseQuery({method: 'POST', url: '/api/login', body: obj})
        if(res?.data?.code == 0){
            dispatch(login(res?.data?.data))
            router.push('/profile')
        }
    } catch (e) {
    console.log("🚀 ~ file: authActions.js:47 ~ loginUser ~ e:", e)

    }
};

export const getUser = (token) => async (dispatch) => {
    try {
        
        const res = await axiosBaseQuery({method: 'GET', url: '/api/user', token: token})
        if(res?.data?.code == 0){
            dispatch(setUser(res?.data?.data))
        }
    } catch (e) {
    console.log("🚀 ~ file: authActions.js:47 ~ loginUser ~ e:", e)

    }
};

export const logoutUser = (token) => async (dispatch) => {
    try {
        const res = await axiosBaseQuery({method: 'GET', url: '/api/logout', token: token})
        if(res?.data?.code == 0){
            dispatch(logout())
        }
    } catch (e) {
    console.log("🚀 ~ file: authActions.js:47 ~ loginUser ~ e:", e)

    }
};
