import {getJWTToken} from "./jwt-utils";

export async function fetchCreatedBooster(username) {
    const token = getJWTToken();
    const response = await fetch("/api/booster?username=" + username, {
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

export async function fetchBoosterById(id) {
    const token = getJWTToken();
    const response = await fetch(`/api/booster/${id}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;

}

export async function fetchIdFromType(boosterType, owner) {
    const token = getJWTToken();
    const response = await fetch(`/api/booster/${boosterType}/${owner}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    if (response.status !== 200) {
        throw new Error(`failed to fetch ID: ${response.statusText}`);
    }
    return await response.text();

}

export function deleteBooster(id) {
    const token = getJWTToken();
    return fetch("api/booster/" + id, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export async function addNewBooster(boosterToAdd) {
    const token = getJWTToken();

    await fetch("/api/booster/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(boosterToAdd)
    }).then((response) => {
        if (response.status !== 200) {
            throw new Error('invalid response');
        }

        return response.json();
    });
}

export function youTubeGetID(url) {
    let ID = '';
    url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
        ID = url[2].split(/[^0-9a-z_\-]/i);
        ID = ID[0];
    } else {
        ID = url;
    }
    return ID;
};


