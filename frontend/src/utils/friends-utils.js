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