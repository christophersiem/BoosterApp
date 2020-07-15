export async function performLogin(username, password) {
    const response = await fetch('auth/login', {
        method: 'PUT',
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
