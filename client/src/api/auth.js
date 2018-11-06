import axios from "axios";

const API = {
    signup:function(newUser){
        return axios.post("/api/signup", newUser)
    },
    login:function(newUser){
        console.log("Login")
        return axios.post("/login", newUser)
    },
    storeUser:function(userData){
        return axios.post("/user" , userData)
    }
}

export default API