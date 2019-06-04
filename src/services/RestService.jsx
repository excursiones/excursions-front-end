import axios from "axios";

const baseURL = "http://192.168.99.100:5000/graphql?";

export default {
  process_error(error) {
    if (error.response != null && error.response.status === 401) {
      // auth.notifyTokenInvalid();
    } else {
      console.log(error);
    }
  },

  get(path, params = {}, withCredentials = true, withBase = true) {
    var response = new Promise((resolve, reject) => {
      var headers = {};

      if (withCredentials) console.log();
      //headers = { Authorization: "Bearer " + auth.getToken() };

      var url = withBase ? baseURL : "" + path;

      axios
        .get(url, { headers: headers, ...params })
        .then(response => resolve(response))
        .catch(error => {
          this.process_error(error);
          reject(error);
        });
    });

    return response;
  },

  post(path, body, withCredentials = true, withBase = true) {
    var response = new Promise((resolve, reject) => {
      var headers = {};

      if (withCredentials) console.log();
      //headers = { Authorization: "Bearer " + auth.getToken() };

      var url = withBase ? baseURL : "" + path;

      axios
        .post(url, body, { headers: headers })
        .then(response => resolve(response))
        .catch(error => {
          this.process_error(error);
          reject(error);
        });
    });
    return response;
  },

  patch(path, body, withCredentials = true, withBase = true) {
    var response = new Promise((resolve, reject) => {
      var headers = {};

      if (withCredentials) console.log();
      //headers = { Authorization: "Bearer " + auth.getToken() };

      var url = withBase ? baseURL : "" + path;

      axios
        .patch(url, body, { headers: headers })
        .then(response => resolve(response))
        .catch(error => {
          this.process_error(error);
          reject(error);
        });
    });
    return response;
  },

  delete(path, body, withCredentials = true, withBase = true) {
    var response = new Promise((resolve, reject) => {
      var headers = {};

      if (withCredentials) console.log();
      //headers = { Authorization: "Bearer " + auth.getToken() };

      var url = withBase ? baseURL : "" + path;

      axios
        .delete(url, body, { headers: headers })
        .then(response => resolve(response))
        .catch(error => {
          this.process_error(error);
          reject(error);
        });
    });
    return response;
  }
};
