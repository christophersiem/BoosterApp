import {getJWTToken} from "./jwt-utils";

export async function addUserAsFriend(friend) {
    const token = getJWTToken();
    const response = await fetch('/api/friends', {

        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({friend}),
    });
    if (response.status !== 200) {
        throw new Error(`failed to add friend: ${response.statusText}`);
    }
    return await response.text();
}

export function deleteFriend(friendDeleteData) {
    const token = getJWTToken();
    return fetch("/api/friends/", {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(friendDeleteData),

    })

}