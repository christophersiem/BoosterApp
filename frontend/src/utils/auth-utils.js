import {getJWTToken} from "./jwt-utils";

export async function performLogin(username, password) {
    const response = await fetch('auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (response.status !== 200) {
        throw new Error(`failed to login: ${response.statusText}`);
    }


    return await response.text();
}

export async function addNewUser(registerData) {
    const response = await fetch('auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
    });
    if (response.status !== 200) {
        throw new Error(`failed to register: ${response.statusText}`);
    }
    return await response.text();
}

export async function getUserByUsername(username){
    const token = getJWTToken();
    const response = await fetch("auth/register?username="+username, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },

    });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
}

export async function addUserAsFriend(username,id) {
    const response = await fetch('auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(username,id),
    });
    if (response.status !== 200) {
        throw new Error(`failed to register: ${response.statusText}`);
    }
    return await response.text();
}


