import axios from "axios";

const API = {
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