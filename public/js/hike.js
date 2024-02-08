var hikeEl = document.querySelector('.hike-images');

// Creates forecast cards and appends to the html
function displayHikeCards(hikeList) {
    hikeEl.innerHTML = '';

    hikeList.forEach(function (hike) {
        console.log(hike);
        const cardDiv = document.createElement("div");
        cardDiv.classList.add('card');
        cardDiv.classList.add('hike-card');
        
        //hike img div
        const hikeImg = document.createElement("img");
        hikeImg.classList.add('card-img-top');
        hikeImg.src = hike.images[0].url;
        hikeImg.alt = "Hike Image - " + hike.name;

        //hike card body elements
        const cardBodyDiv = document.createElement("div");
        cardBodyDiv.classList.add('card-body');
        //hike card title/name
        const header = document.createElement("h5");
        cardBodyDiv.classList.add('card-title');
        header.textContent = hike.name;
        //hike card description
        const pEl = document.createElement("p");
        pEl.classList.add('card-text');
        pEl.textContent = hike.description;

        //hike review button
        const buttonEl = document.createElement("a");
        buttonEl.classList.add('reviewBtn');
        buttonEl.classList.add('btn');
        buttonEl.classList.add('btn-primary');
        
        //TODO: change link to heroku endpoint
        buttonEl.href = "/hike/" + hike.id;
        buttonEl.textContent = 'Check it out!';

        //build my card element
        cardBodyDiv.appendChild(header);
        cardBodyDiv.appendChild(pEl);
        cardBodyDiv.appendChild(buttonEl);
        cardDiv.appendChild(hikeImg);
        cardDiv.appendChild(cardBodyDiv);
        hikeEl.appendChild(cardDiv);
    });
}