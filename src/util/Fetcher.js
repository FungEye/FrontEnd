async function getMushrooms(authHeader) {

    let response = await fetch("https://fungeye-383609.ey.r.appspot.com/mushrooms",
        {
            method: "GET",
            headers: {
                Authorization: authHeader,
              },
        })
    let mushrooms = await response.json();
    return mushrooms;
}

export {getMushrooms}