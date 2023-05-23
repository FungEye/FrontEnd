async function getMushrooms(authHeader) {
    fetch("https://fungeye-383609.ey.r.appspot.com/mushrooms",
        {
            method: "GET",
            headers: {
                Authorization: authHeader,
            },
        })
        .then((response) => {
            if (response.ok) return response.json();
        })
        .catch((err) => console.log(err));
}

export { getMushrooms }