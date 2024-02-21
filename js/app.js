let elCards = document.querySelector(".cards");
let elHeroTemplate = document.querySelector(".hero-template").content;
let elFragment = new DocumentFragment();
let elSearchCountry = document.querySelector(".search-country");
let elCountryInput = document.querySelector(".country-input");
let elSelectCountry = document.querySelector(".select-country");
let elOptionRegion = document.querySelector(".region-option");

let COUNTIRIES_URL = "https://restcountries.com/v3.1/all";
let COUNTIRY_URL = "https://restcountries.com/v3.1/name/";
let REGION_URL = "https://restcountries.com/v3.1/region/";

const resultCountiry = () =>{
    fetch(COUNTIRIES_URL).then(res => res.json())
    .then(data => {
        data.slice(0, 10).forEach((countiry) => {
            let elCloneHeroTemplate = elHeroTemplate.cloneNode(true);
            elCloneHeroTemplate.querySelector(".countiry-img").src = countiry.flags.png;
            elCloneHeroTemplate.querySelector(".countiry-name").textContent = countiry.name.official;
            elCloneHeroTemplate.querySelector(".countiry-desc").textContent = countiry.flags.alt;
            elFragment.append(elCloneHeroTemplate);
            elCards.appendChild(elFragment)
        })
    })
    
}
resultCountiry();

elSearchCountry.addEventListener("submit", (evt) => {
    evt.preventDefault();
    elCards.innerHTML = null;  
    let elCountryValue = elCountryInput.value.trim();      
    fetch(COUNTIRY_URL + elCountryValue).then(res => res.json())
    .then(data => {
        data.forEach((countiry) => {
            let elCloneHeroTemplate = elHeroTemplate.cloneNode(true);
            elCloneHeroTemplate.querySelector(".countiry-img").src = countiry.flags.png;
            elCloneHeroTemplate.querySelector(".countiry-name").textContent = countiry.name.official;
            elCloneHeroTemplate.querySelector(".countiry-desc").textContent = countiry.flags.alt;
            elFragment.append(elCloneHeroTemplate);
            elCards.appendChild(elFragment)
        })
    })
    elCountryInput.value = ""
})

elSelectCountry.addEventListener("change", () => {
    // console.log(elSelectCountry.value);
    elCards.innerHTML = null
    fetch(REGION_URL + elSelectCountry.value).then(res => res.json())
    .then(data => {
        data.forEach((countiry) => {
            let elCloneHeroTemplate = elHeroTemplate.cloneNode(true);
            elCloneHeroTemplate.querySelector(".countiry-img").src = countiry.flags.png;
            elCloneHeroTemplate.querySelector(".countiry-name").textContent = countiry.name.official;
            elCloneHeroTemplate.querySelector(".countiry-desc").textContent = countiry.flags.alt;
            elFragment.append(elCloneHeroTemplate);
            elCards.appendChild(elFragment)
        })
    })
})





