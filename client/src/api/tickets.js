import axios from "axios";

const API = {
    getTickets:function(){
        return axios.get("/api/tickets");
    },
    createTickets:function(newTicket){
        return axios.post("/api/tickets" , newTicket)
    },
    updateTickets:function(){
        console.log("Updating Ticket");
    },
    deleteTickets:function(){
        console.log("Deleting Ticket");
    }
}

export default API