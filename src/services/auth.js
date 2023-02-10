import apiClient from "./client";

export const Authenticate = async({user}) => {
    await apiClient.post("/loginUser", user)
    .then(function (res) {
        return Promise.resolve(res.data);
    })
    .catch(function (error) {
        console.error(error);
    });

};