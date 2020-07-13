export async function fetchCreatedBooster() {
    const creatorId = 2;
    const response = await fetch("/api/booster?creator="+creatorId, {
        method: "GET"

    });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    return data;
}

export async function deleteBooster(id){
    await fetch ("api/booster/"+id,{
        method:"DELETE"
    })
}