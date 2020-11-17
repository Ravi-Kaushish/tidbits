import axios from 'axios';
import CallApi from './CallApi'
import {
    BASE_URL,
    login,
    refresh_token_URL
} from '../constants/ApiEndPoints';

class Auth {
    constructor() {
        this.authenticated = false;
        let token = localStorage.getItem("AccessToken")
        if (token !== null) {
            this.authenticated = true;
        };
    };

    isAuthenticated() {
        return this.authenticated
    };

    Login = async (Username, Password) => {
        var that = this;
        let Authorization = 'Basic ' + Buffer.from(`${Username}:${Password}`).toString('base64');
        let headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': Authorization
        };
        await CallApi.CustomCall(BASE_URL + login, headers, 'POST', {})
            .then(function (response) {
                // localStorage.setItem("AccessToken", response.data.data.AccessToken)
                // localStorage.setItem("RefreshToken", response.data.data.RefreshToken)
                // let token = localStorage.getItem("AccessToken")
                // if (token !== null) {
                //     that.authenticated = true
                // }
                if (response.status === 200) {
                    if (response.data.data.AccessToken !== undefined) {
                        localStorage.setItem("AccessToken", response.data.data.AccessToken)
                        localStorage.setItem("RefreshToken", response.data.data.RefreshToken)
                        let token = localStorage.getItem("AccessToken")
                        if (token !== null && token !== undefined) {
                            that.authenticated = true
                        }
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    Logout() {
        var that = this;
        localStorage.removeItem("AccessToken");
        localStorage.removeItem("RefreshToken");
        let token = localStorage.getItem("AccessToken");
        if (token === null) {
            that.authenticated = false
        }
    };

    DecodeJWT(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    };

    RefreshToken = async (token) => {
        const refreshToken = await localStorage.getItem('RefreshToken');
        let headers = {
            'Authorization': "Bearer " + refreshToken,
            'Content-Type': "application/json",
            'Access-Control-Allow-Origin': true
        };
        var that = this;
        await axios(BASE_URL + refresh_token_URL, {
            method: 'POST',
            headers: await headers,
        })
            .then(function (response) {
                localStorage.setItem("AccessToken", response.data.data.AccessToken)
                localStorage.setItem("RefreshToken", response.data.data.RefreshToken)
                let token = localStorage.getItem("AccessToken")
                if (token !== null) {
                    that.authenticated = true
                }
                window.location.reload();
            })
            .catch(err => {
                if (err.response) {
                    localStorage.clear()
                    if (err.response.status === 401 && err.response.data.message.message === "Refresh Token Expired") {
                        console.log("Session Expired")
                        this.Logout()
                    }
                }
                console.log(err);
            });
        return this.isAuthenticated();
    };
};

export default new Auth();