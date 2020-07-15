export async function fetchCreatedBooster() {
    const creatorId = 2;
    const response = await fetch("/api/booster?creator=" + creatorId, {
        method: "GET"

    });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    return data;
}


export async function deleteBooster(id) {
    await fetch("api/booster/" + id, {
        method: "DELETE"
    })
    await fetchCreatedBooster();
}

export async function addNewBooster(boosterToAdd) {

    await fetch("api/booster/", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(boosterToAdd)
    })



}