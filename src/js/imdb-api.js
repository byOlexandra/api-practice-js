export function getFilmByQuery(query) {
    const baseURL = "https://imdb236.p.rapidapi.com";
    const endPoint = "/api/imdb/search";
    const params = new URLSearchParams({
        originalTitle: query,
    }) 
    const url = `${baseURL}${endPoint}?${params}`;

    return fetch(url, {
        method: "GET",
        headers: {
            "X-RapidAPI-Host": "imdb236.p.rapidapi.com",
            "X-RapidAPI-Key": "4766653a73msh5c8737be62a1a51p1a3997jsn423a1928ab99"
        }
    }).then(r => r.json());
}
const loader = document.querySelector(".loader");
const searchReply = document.querySelector(".search-reply");

// export function hideLoader() {
//     loader.classList.add('hidden')
// }

// export function showLoader() {
//     loader.classList.remove('hidden')
// }

export function clearAll() {
    searchReply.innerHTML = ''
}
