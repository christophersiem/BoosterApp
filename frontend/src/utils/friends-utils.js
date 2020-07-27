import {getJWTToken} from "./jwt-utils";

export async function addUserAsFriend(friendData) {
    const token = getJWTToken();
    const response = await fetch('/api/friends', {

        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(friendData),
    });
    if (response.status !== 200) {
        throw new Error(`failed to add friend: ${response.statusText}`);
    }
    return await response.json();
}