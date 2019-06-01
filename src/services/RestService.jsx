import axios from 'axios';

const baseURL = "https://6e923b33-6196-414e-9002-341cab046083.mock.pstmn.io";

export default {
    process_error(error) {
        if(error.response != null && error.response.status === 401) {
            // auth.notifyTokenInvalid();
        } else {
            console.log(error);
        }
    },
    
    get(path, params = {}, withCredentials = true) {
        var response = new Promise((resolve, reject) => {
            var headers = {}
            
            if(withCredentials)
            console.log();
            //headers = { Authorization: "Bearer " + auth.getToken() };
            
            axios.get(baseURL + path, { headers: headers, ...params })
            .then(response => resolve(response))
            .catch(error => {
                this.process_error(error);
                reject(error);
            });
        });
        
        return response;
    },
    
    post(path, body, withCredentials = true) {
        var response = new Promise((resolve, reject) => {
            var headers = {}
            
            if(withCredentials)
            console.log();
            //headers = { Authorization: "Bearer " + auth.getToken() };
            
            axios.post(baseURL + path, body, { headers: headers })
            .then(response => resolve(response))
            .catch(error => {
                this.process_error(error);
                reject(error);
            });
        });
        return response;
    },
    
    patch(path, body, withCredentials = true) {
        var response = new Promise((resolve, reject) => {
            var headers = {}
            
            if(withCredentials)
            // headers = { Authorization: "Bearer " + auth.getToken() };
            console.log();
            
            axios.patch(baseURL + path, body, { headers: headers })
            .then(response => resolve(response))
            .catch(error => {
                this.process_error(error);
                reject(error);
            });
        });
        return response;
    },

    delete(path, body, withCredentials = true) {
        var response = new Promise((resolve, reject) => {
            var headers = {}
            
            if(withCredentials)
            // headers = { Authorization: "Bearer " + auth.getToken() };
            console.log();
            
            axios.delete(baseURL + path, body, { headers: headers })
            .then(response => resolve(response))
            .catch(error => {
                this.process_error(error);
                reject(error);
            });
        });
        return response;
    },
}