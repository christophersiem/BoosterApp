import {getJWTToken} from "./jwt-utils";

export async function fetchNumberOfCreatedBooster(username) {
    const token = getJWTToken();
    const response = await fetch(`/auth/register?username=`+username, {
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