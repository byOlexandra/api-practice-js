import { getFilmByQuery, clearAll } from "./js/imdb-api";


const form = document.querySelector(".form");
const loader = document.querySelector(".loader");
const searchReply = document.querySelector(".search-reply");

form.addEventListener("submit", e => {
    e.preventDefault()
    const search = e.target.elements['search-text'].value.trim();
    if (!search) {
        return `<h1>error</h1>`
    }
    clearAll()
    // showLoader()
    console.log(search);
    
    getFilmByQuery(search)
    .then(item => {
        const markup = item.results
            .map(item => {
                return `
                    <li class="film">
                        <h3>${item.originalTitle || item.title}</h3>
                        <p>${item.releaseDate || ''}</p>
                        <img src="${item.primaryImage || ''}" alt="${item.primaryTitle}">
                    </li>
                `;
            })
            .join(""); 
        searchReply.innerHTML = markup;
    })
})