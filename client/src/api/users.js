import axios from "axios";

const API = {
    getUser:function(){
        console.log("Getting User");
    },
    getUsers:function(){
        return axios.get("/api/user");
    },
    createUsers:function(){
        console.log("Creating User");
    },
    updateUser:function(){
        console.log("Updating User");
    },
    deleteUser:function(){
        console.log("Deleting User");
    }
}

export default API