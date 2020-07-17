import {getJWTToken} from "./jwt-utils";

export async function fetchCreatedBooster() {
    const token = getJWTToken();
    const creator = 2;
    const response = await fetch("/api/booster?creator=" + creator, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },

    });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    return data;
}

export async function fetchRandomBooster(boosterType) {
    const token = getJWTToken();
    const response = await fetch("/api/booster/random", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(boosterType)
    });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    return data;
}


export async function deleteBooster(id) {
    const token = getJWTToken();
    await fetch("api/booster/" + id, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    await fetchCreatedBooster()
}

export async function addNewBooster(boosterToAdd) {
    const token = getJWTToken();

    await fetch("api/booster/", {
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