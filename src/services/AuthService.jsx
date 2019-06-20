import Http from "./RestService.jsx";
import { Subject } from "rxjs";

let jwt = window.localStorage.getItem("token");
let jwtObservable = new Subject();

export default {
  getObservable() {
    return jwtObservable;
  },

  notifyTokenInvalid() {
    this.logout();
  },

  isAuthenticated() {
    return jwt !== null;
  },

  getToken() {
    return jwt;
  },

  login(email, password) {
    let promise = new Promise((resolve, reject) => {
      Http.post(
        "",
        //"http://3.13.112.89:3000/sign_in",
        {
          query: `
            mutation {
              sign_in ( signInCredentials: {
                auth: {
                  email: "${email}",
                  password: "${password}"
                }
              }){
                token
              }
            }
          `

        },
        true,
        true
      )
        .then(response => {
          jwt = response.data.data.sign_in.token;
          console.log(jwt);

          //localStorage.setItem("token", jwt);
          window.localStorage.setItem("token", jwt);
          resolve(this.isAdmin());
        })
        .catch(err => {
          console.log("Error " + err.message);
          reject(err);
        });
    });

    return promise;
  },

  isAdmin() {
    if (this.getPayload() == null) return null;
    return this.getPayload()["type"].length == 1;
  },

  getUserId() {
    return this.getPayload()["id"][0];
  },

  getPayload() {
    console.log(this.parseJwt(jwt));
    return this.parseJwt(jwt);
  },

  parseJwt(token) {
    if (token == undefined || token == null) return null;
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  },

  logout() {
    return new Promise(resolve => {
      jwt = null;
      window.localStorage.removeItem("token");
      resolve(true);
    });
  }
};
