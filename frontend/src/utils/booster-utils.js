import {getJWTToken} from "./jwt-utils";

export async function fetchCreatedBooster() {
    const token = getJWTToken();
    const response = await fetch("/api/booster", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },

    });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    return await response.json();
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
    return await response.json();


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
    return fetch("/api/booster/" + id, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export async function addNewBooster(boosterToAdd) {
    const token = getJWTToken();

    return await fetch("/api/booster/", {
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




